const sql = require("./db.js");

//construtor
const ProdutoModel = function(produto) {
    this.nome = produto.nome;
    this.valor = produto.valor;
}

//Cria um novo produto no banco
ProdutoModel.create = (produto, result) => {

    //implementar criação de um novo produto no banco
};

//Selecionar um produto através de um ID
ProdutoModel.findById = (produtoId, result) => {


};

//Selecionar todos os produtos
ProdutoModel.getAll = (result) => {

}

//Atualizar produto através de um ID
ProdutoModel.updateById = (produtoId, produto, result) => {


}

//Remover produto através de um ID
ProdutoModel.remove = (produtoId, result) => {


}

//Remover todos os produtos
ProdutoModel.removeAll = (result) => {

}

module.exports = ProdutoModel;