import express from "express";
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index2.ejs', {
        name: "Ajay"
    });
});

app.post('/submit', (req, res) => {
    res.render(__dirname + '/views/index3.ejs', {
        password: req.body['password']
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
