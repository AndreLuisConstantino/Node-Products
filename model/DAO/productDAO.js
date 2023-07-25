/***********************************************************
 * Objetivo: Responsável pela manipulação de dados dos Produtos no Banco de Dados
 * Data: 25/07/2023
 * Autor: André
 * Versão: 1.0
 ***********************************************************/

//Import da biblioteca do prisma client
var { PrismaClient } = require("@prisma/client");

var prisma = new PrismaClient();

const insertProductDao = function (dataProduct) {};

const updateProductDao = function (dataProduct) {};

const deleteProductDao = function (idProduct) {};

const selectAllProductsDao = async function () {
  //Script SQL para buscar todos os itens no BD
  let sql = `select  products.id ,products.nome, products.descricao, products.codigo, tbl_type_products.nome as tipo_produto
                from tbl_products as products
                    inner join tbl_type_products
                        on products.id_tipo = tbl_type_products.id`;

  let responseProduct = await prisma.$queryRawUnsafe(sql);

  // console.log(responseProduct);

  //Valida se o BD retornou algum registro
  if (responseProduct.length > 0) {
    return responseProduct;
  } else {
    return false;
  }
};

const selectByIdDao = function (idProduct) {};

const selectByCodeDao = function (codeProduct) {};

module.exports = {
  insertProductDao,
  updateProductDao,
  deleteProductDao,
  selectAllProductsDao,
  selectByIdDao,
  selectByCodeDao,
};
