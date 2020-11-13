module.exports = app => {
    const usuarioController = require("../controllers/usuario.controller.js");

    //Criar uma nova conta
    app.post("/signup", usuarioController.signUp);
    //Logar no sistema
    app.post("/signin", usuarioController.signIn);

}