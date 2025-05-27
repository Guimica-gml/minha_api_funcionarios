# Minha API Funcionários

Uma API para controle de funcionários em uma empresa.

## Integrantes do grupo

Grupo 2:
- Nicholas Almeida Albuquerque (@Guimica-gml)
- Anderson dos Santos Ribeiro Júnior (@nemesisssgor)
- Gabriel Bomfim Silva (@GabrielB03)
- Yago Amâncio Ribeiro (@yagoAribeiro)
- Leandro Oliveira Martins Filho (@Leandro-Oliveira-Bezilla)
- Juan Carlos Barbosa de Jesus (@juanC137)
- Paulo Henrique Alves Rodrigues dos Santos (@Auri-Gold)

## Banco de Dados

A API usa [mysql](https://www.mysql.com/) como banco de dados.
Os comandos para iniciar o banco de dados podem ser encontrados em `database.sql`.
Por padrão o mysql tenta acessar o usuário `root` com senha `root`.

## Como iniciar

Para iniciar o servidor basta usar o comando:

```
$ npm install # only once, installs dependencies
$ npm run dev
```

## Para acessar o website e a documentação

A documentação é feita utilizando a ferramenta [swagger](https://swagger.io/).

```
$ npm run ui
```
Se o seu computador não estiver configurado para rodar python através do comando `python3` use o seguinte comando:

```
$ npm run ui3
```

Depois basta apenas acessar o link `http://0.0.0.0:8080/` para acessar o website.
E `http://0.0.0.0:8080/swagger-docs.html` para ler a docuentação da API.
