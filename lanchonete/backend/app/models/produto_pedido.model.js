const sql = require("./db.js");

const ProdutoPedido = function(produtoPedido) {
    this.produtos_idprodutos = produtoPedido.produtos_idprodutos;
    this.pedidos_idpedidos = produtoPedido.pedidos_idpedidos;
    this.observacao = produtoPedido.observacao
}

ProdutoPedido.create = (produtoPedido, result) => {
    sql.query("INSERT INTO produtos_pedidos SET ?", produtoPedido, (err, res) => {
        result(null, { idprodutospedidos: res.insertId, ...produtoPedido });
    })
}

ProdutoPedido.getAll = (result) => {
    sql.query(`SELECT * FROM produtos_pedidos prods_peds
    INNER JOIN pedidos peds ON (peds.idpedidos = prods_peds.pedidos_idpedidos)
    INNER JOIN produtos prods ON (prods.idprodutos = prods_peds.produtos_idprodutos)
    `, (err, res) => {
        result(null, res);
    })
}




module.exports = ProdutoPedido;