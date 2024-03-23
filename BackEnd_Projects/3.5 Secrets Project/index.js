//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


function logger(req, res, next) {

    console.log(req.method);
    console.log(res.statusCode);
    console.log(req.url);
    next();

}


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/check', (req, res) => {
    const reqBody = req.body;
    const password = reqBody.password;
    console.log(password);
    if (password === 'ILoveProgramming') {
        res.sendFile(__dirname + "/public/secret.html");
    } else {

        res.sendFile(__dirname + "/public/index.html");
    }

});

app.listen(port, (req, res) => {
    console.log("Listinging port is: " + port);
});
