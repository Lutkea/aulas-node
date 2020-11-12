const sql = require("./db.js");

//construtor
const PedidoModel = function (pedido) {
    this.hora = pedido.hora;
    this.status = pedido.status;
}


//Cria um novo pedido no banco
PedidoModel.create = (pedido, result) => {
    sql.query("INSERT INTO pedidos SET ? ", pedido, (err, res) => {
        if (err) {
            console.log("Erro:", err);
            result(err, null);
            return;
        }
        console.log("Pedido criado: ", { idpedidos: res.insertId, ...pedido });
        result(null, { idpedidos: res.insertId, ...pedidos });

    });
    //implementar criação de um novo pedido no banco
};

//Selecionar um pedido através de um ID
PedidoModel.findById = (pedidoId, result) => {
    sql.query("SELECT * FROM pedidos WHERE idpedidos = " + pedidoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log("Pedido encontrado: ", res[0]);
            result(null, res[0]);
            return;
        } else
            result({ kind: "not_found" }, null)

    })

};

//Selecionar todos os pedidos
PedidoModel.getAll = (result) => {
    sql.query("SELECT * FROM pedidos", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        console.log("pedidos: ", res);
        result(null, res);
    })
}

//Atualizar pedido através de um ID
PedidoModel.updateById = (pedidoId, pedido, result) => {
    sql.query("UPDATE pedidos SET hora = ?, status = ? WHERE idpedidos = ? ", [pedido.hora, pedido.status, pedidoId], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("Pedido atualizado: ", { idpedidos: pedidoId, ...pedido });
            result(null, { idpedidos: pedidoId, ...pedido });
        }
    })
}


//Remover pedido através de um ID
PedidoModel.remove = (pedidoId, result) => {
    sql.query("DELETE FROM pedidos WHERE idpedidos = ?", pedidoId, (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            result(null, res);
        }
    })
}

//Remover todos os pedidos
PedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM pedidos", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
}

module.exports = PedidoModel;