/***************************************************************************************
* Objetivo: API para integração entre Back e Banco e Dados (GET, POST, PUT, DELETE)
* Data: 25/07/2023
* Autor: André Luiz
* Versão: 1.0
***************************************************************************************/

var controllerProduct = require('./controller/controller_product.js')

//Import do arquivo de configuração das variáveis, constantes e funções globais
var message = require('./controller/modulo/config.js')

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria o objeto app conforme a classe do express
const app = express()

//Permissões do cors
app.use((request, response, next) => {
    //Define quem poderá acessar a API (* = Todos)
    response.header('Acess-Control-Allow-Origin', '*')
    //Define quais métodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao Cors
    app.use(cors())

    next()
})

//Define que os dados que iram chegar na requisição será no padrão JSON
const bodyParserJSON = bodyParser.json()

app.get('/v1/shop/product', cors(), async function (request, response) {

    let responseProduct = await controllerProduct.selectAllProductsModel()

    console.log(responseProduct);

    response.status(responseProduct.status)
    response.json(responseProduct)

})

app.listen(8080, () => console.log('Servidor aguardando na porta 8080'))