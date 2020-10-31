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
    sql.query("SELECT * FROM produtos WHERE idprodutos = " + produtoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log("Produto encontrado: ", res[0]);
            result(null, res[0]);
            return;
        } else
            result({ kind: "not_found" }, null)

    })

};

//Selecionar todos os produtos
ProdutoModel.getAll = (result) => {
    sql.query("SELECT * FROM produtos", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        console.log("produtos: ", res);
        result(null, res);
    })
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