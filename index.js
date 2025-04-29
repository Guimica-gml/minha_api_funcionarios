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

app.post("/funcionarios", (req, res) => {
  const { nome, cargo, salario } = req.body;
  const query =
    "INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)";
  connection.query(query, [nome, cargo, salario], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: "Erro no servidor" });
    }
    res.status(201).json({ id: result.insertId, nome, cargo, salario });
  });
});

app.get("/funcionarios", (req, res) => {
  connection.query("SELECT * FROM funcionarios", (err, results) => {
    if (err) {
      console.error("Erro ao buscar usuários:", err);
      return res.status(500).json({ erro: "Erro no servidor" });
    }
    res.status(200).json(results);
  });
});

app.get("/funcionarios/:id", (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM funcionarios WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ "erro": "Erro no servidor" });
        }
        if (results.length <= 0) {
            return res.status(400).json({ "mensagem": `Não foi possível encontrar funcionário com id ${id}` });
        }
        res.status(200).json(results[0]);
    });
});

app.put("/funcionarios/:id", (req, res) => {
  const { id } = req.params;
  const { nome, cargo, salario } = req.body;
  const query = "UPDATE funcionarios SET nome = ?, cargo = ?, salario = ? WHERE id = ?";
  connection.query(query, [nome, cargo, salario, id], (err, results) => {
      if (err) {
          return res.status(500).json({ "erro": "Erro no servidor" });
      }
      res.status(200).json({ nome, cargo, salario });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});