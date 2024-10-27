import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  return result.rows.map((country) => country.country_code);
}

// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

// INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log(input);

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'",
      [input.toLowerCase()]
    );
    if (result.rows.length > 0) {
      const countryCode = result.rows[0].country_code;
      try {
        await db.query(
          "INSERT INTO visited_countries (country_code) VALUES ($1)",
          [countryCode]
        );
        res.redirect("/"); // Redirect to home page after successful insertion
        
      } catch (error) {
        const countries = await checkVisited();
        res.render("index.ejs", {
          countries: countries,
          total: countries.length,
          error: "Country has already been added, try again",
        });
      }
    } else {
      const countries = await checkVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country name does not exist, try again.",
      });
    }
  } catch (err) {
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Error checking the country, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
