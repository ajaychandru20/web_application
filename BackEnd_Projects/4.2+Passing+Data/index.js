import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs',
  {info:"<h1>Enter your name below</h1>"})
});

app.post("/submit", (req, res) => {
  
  const fname = req.body['fName'];
  const lname = req.body['lName'];
  const lenFname = fname.length;
  const lenLname = lname.length;
  const numberOfLetter = `<h1>There are ${lenFname + lenLname} letters in you name </h1>` 
  res.render('index.ejs', { lenFname,lenLname, numberOfLetter  })
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
