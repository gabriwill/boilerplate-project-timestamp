# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

Este repositório é a minha solução para o desafio [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) para obtenção do certificado do curso  [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices) da [FreeCodeCamp](https://www.freecodecamp.org).

## 🎌 Objetivos

- Aplicar os conhecimentos obtidos no curso [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices) da [FreeCodeCamp](https://www.freecodecamp.org).
- Montar uma API que passe nos testes:
	- :white_check_mark: A API deve retornar a uma requisição GET na rota ```/api/:date?``` um JSON neste formato ```{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" } ``` quando o ```date``` contiver uma data válida.
	- :white_check_mark: A data informada no parâmetro ```date```  poderá ser um número que representará uma data no formato UNIX. 
	- :white_check_mark:No caso de uma data inválida, a API deve retornar um JSON neste formato ```{ error : "Invalid Date" }```.
	- :white_check_mark: Se o parâmetro ```date``` for nulo a API retornará a data atual.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/)

## 📁 Libraries

- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)

## ✨ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

## 🚀 Getting Started

- Configure a porta que o seu servidor utilizará informando-a em uma variável de ambiente ```PORT``` no arquivo ```.env```.
- Rode os seguintes comandos no terminal para iniciar o server:

```
# for npm users
 npm install
# then 
 npm start
```
## :octocat: Autor

Feito com 👨🏻‍💻 por Gabriel Willans 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-willans-780754200/)](https://www.linkedin.com/in/gabriel-willans-780754200/) [![Outlook Badge](https://img.shields.io/badge/-g.willans@outlook.com-00a0ee?style=flat-square&logo=microsoftoutlook&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:tgmarinho@gmail.com)

