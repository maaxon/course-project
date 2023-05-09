import express from 'express'
import fs from "fs"
import parser from "xml2json"
import cors from "cors"


const PORT = 5000;

const options = {
    object: false,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false,
    alternateTextNode: false
};

const app = express()
app.use(cors());


app.get("/", (req, res) => {
    fs.readFile('./brands.xml', function (err, data) {
        const json = parser.toJson(data, options);
        console.log("to json ->", json);
        res.send(json)
    });

})

app.get("/cars", (req, res) => {
    fs.readFile('./cars.xml', function (err, data) {
        const json = parser.toJson(data, options);
        console.log("to json ->", json);
        res.send(json)
    });

})

app.listen(PORT, () => {
    console.log("server listening")
})