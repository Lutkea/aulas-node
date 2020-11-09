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





module.exports = ProdutoPedido;