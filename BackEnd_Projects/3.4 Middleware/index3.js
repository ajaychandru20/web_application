import express from "express";
import morgan from "morgan";

function logger(req,res,next) {
  console.log("the methods and url: " + req.method, req.port);
  console.log("Request URL: " + req.url);
  // console.log("Responce body" + res.); 
  next();
}

const app = express();
const port = 3000;

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/ajay",(req,res)=>{
  res.send("Hi ajay");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
