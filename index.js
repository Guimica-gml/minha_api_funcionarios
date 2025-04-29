const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "empresa",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL com sucesso!");
  }
});

module.exports = connection;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});