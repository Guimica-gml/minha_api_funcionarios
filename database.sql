CREATE DATABASE empresa;
USE empresa;

CREATE TABLE funcionarios (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nome VARCHAR(100),
     cargo VARCHAR(100),
     salario FLOAT
);
