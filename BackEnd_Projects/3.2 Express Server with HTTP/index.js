import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
    // console.log(req.rawHeaders);
  });
app.get('/contact',(req,res)=>{
    res.send('contact: +123456789');
});
app.get('/about',(req,res)=>{
    res.send('Hi this is ajay i am learning about web_application.');
});

app.listen(port,()=>{
    console.log(`Server running sucessfully...in ${port}`);
});