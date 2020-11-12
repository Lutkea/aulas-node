const produtoModel = require("../models/produto.model.js");

exports.create = (req, res) => {
    if (!req.body.nome && !req.body.valor) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const produto = new produtoModel({
            nome: req.body.nome,
            valor: req.body.valor
        });

        produtoModel.create(produto, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Ocorreu um erro"
                });
            } else {
                res.send(data);
            }
        })
    }

}

exports.findAll = (req, res) => {
    produtoModel.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu algum erro"
            })
        } else
            res.send(data);
    });
}

exports.findOne = (req, res) => {
    produtoModel.findById(req.params.produtoId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: "Produto não encontrado. ID:" + req.params.produtoId
                });
            } else {
                res.status(500).send({
                    message: "Erro ao retornar o produto com ID:" + req.params.produtoId
                });
            }
        } else
            res.send(data);
    })

}

exports.update = (req, res) => {
    if (!req.body.nome && !req.body.valor) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const produto = new produtoModel({
            nome: req.body.nome,
            valor: req.body.valor
        });

        produtoModel.updateById(req.params.produtoId, produto, (err, data) => {
            if (err) {
                if (err.kind == "not_found") {
                    res.status(404).send({
                        message: "Produto não encontrado."
                    });
                } else {
                    res.status(500).send({
                        message: "Erro ao atualizar produto."
                    })
                }
            } else {
                res.send(data);
            }
        })
    }
}

exports.delete = (req, res) => {
    produtoModel.remove(req.params.produtoId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({ message: "Produto não encontrado." })
            } else {
                res.status(500).send({ message: "Erro ao deletar produto." })
            }
        } else {
            res.send({ messsage: "Produto deletado com sucesso" });
        }
    })

}

exports.deleteAll = (req, res) => {
    produtoModel.remove((err) => {
        if (err) {
            res.status(500).send({ message: "Erro ao deletar todos os produtos." })
        } else {
            res.send({ messsage: "Todos os produtos deletados com sucesso" });
        }
    })
}