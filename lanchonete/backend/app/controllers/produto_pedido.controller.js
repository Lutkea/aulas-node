const produtoPedidoModel = require("../models/produto_pedido.model.js");

exports.create = (req, res) => {
    const produtoPedido = new produtoPedidoModel({
        produtos_idprodutos: req.body.produtos_idprodutos,
        pedidos_idpedidos: req.body.pedidos_idpedidos,
        observacao: req.body.observacao
    });

    produtoPedidoModel.create(produtoPedido, (err, data) => {
        res.send(data);
    });
}