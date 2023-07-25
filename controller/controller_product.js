/*********************************************************** 
* Objetivo: Responsável pela manipulação de dados dos Produtos no Banco de Dados
* Data: 25/07/2023
* Autor: André
* Versão: 1.0
***********************************************************/

var message = require('./modulo/config.js')

var productDao = require('../model/DAO/productDAO.js')

const insertProductModel = function () {

}

const updateProductModel = function (dataProduct) {

}

const deleteProductModel = function (idProduct) {

}

const selectAllProductsModel = async function () {
    let dataProductJson = {}

    let dataProduct = await productDao.selectAllProductsDao()

    console.log(message.SUCCES_REQUEST.status);

    if (dataProduct) {
        dataProductJson.status = message.SUCCES_REQUEST.status
        dataProductJson.quantidade = dataProduct.length
        dataProductJson.products = dataProduct
        return dataProductJson
    } else {
        return message.ERROR_ITEM_NOT_FOUND
    }
}

const selectByIdModel = function (idProduct) {

}

const selectByCodeModel = function (codeProduct) {
    
}

module.exports = {
    insertProductModel,
    updateProductModel,
    deleteProductModel,
    selectAllProductsModel,
    selectByIdModel,
    selectByCodeModel
}