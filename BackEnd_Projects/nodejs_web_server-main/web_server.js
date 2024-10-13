const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500;

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.listen(PORT,() => console.log(`Server running in the port${PORT}`)

)
