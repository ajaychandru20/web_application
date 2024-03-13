import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


function validater(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  console.log(req.body);
  // const bandName = req.body["street"] + req.body["pet"];
  // console.log(bandName);
  next();
}

app.use(validater);

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.post("/submit", (req, res) => {
  const reqBody = req.body;
  const combainBody = reqBody.street + reqBody.pet;
  const message = "<h1>Your band name is: </h1>" +
    "<h2>" + combainBody + "🔥" + "</h2>";

  res.send(message);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
