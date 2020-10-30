const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//parser para eequisições com content-type: application/json
app.use(bodyParser.json());

//parser para requisições content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo à API MVC do SENAC" });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});