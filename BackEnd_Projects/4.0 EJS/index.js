import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    const day = new Date().getDay();
    let days;

    switch (day) {
        case 0:
            days = "Hey its weekend, its time to have fun!"

            break;

        case 1:
            days = "Hey its weekday, its time to work hard!"
            break;
        case 2:
            days = "Hey its weekday, its time to work hard!"
            break;
        case 3:
            days = "Hey its weekday, its time to work hard!"
            break;
        case 4:
            days = "Hey its weekday, its time to work hard!"
            break;
        case 5:
            days = "Hey its weekday, its time to work hard!"
            break;
        case 6:
            days = "Hey its weekend, its time to have fun!";
            break;
        default:
            break;
    }


    res.render(__dirname + '/views/index.ejs',
    {advice: days}
    );
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
