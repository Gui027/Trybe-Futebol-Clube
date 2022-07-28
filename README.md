# Projeto Trybe Futebol Clube (TFC)

# Contexto

![image](https://user-images.githubusercontent.com/83846567/179008045-bc109a42-09e0-44cb-ba92-c2637c420529.png)


O TFC é um site informativo sobre partidas e classificações de futebol!

No time de desenvolvimento do TFC, fiquei responsável por desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Nesse projeto, desenvolvi um back-end dockerizado utilizando modelagem de dados através do Sequelize. O desenvolvimento do back-end foi feito pensando nas regras de negócio providas no projeto, pois sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto.

Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. Fiz um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas.

O back-end está implementando regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

## Técnologias usadas

Front-end:
> Desenvolvido usando: React, Redux, CSS3, HTML5, Redis, ES6

Back-end:
> Desenvolvido usando: NodeJS, Sequelize, ExpressJS, MYSQL, ES6


## Instalando Dependências

> Backend
```bash
cd api/ 
npm install
``` 
> Frontend
```bash
cd src/
npm install
``` 
## Executando aplicação

* Para rodar o back-end:

  ```
  cd api/ && npm start
  ```
* Para rodar o front-end:

  ```
    cd src/ && npm start
  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```
