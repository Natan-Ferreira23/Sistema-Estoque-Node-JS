const express = require("express");
const app = express();
const sequelize = require("./config/database.js");
const categoriaRoute = require("./routes/categoriaRoute.js");
//const movimentacoesRoute = require("./routes/movimentacoesRoute.js");
const produtoRoute = require("./routes/produtoRoute.js");
const fornecedorRoute = require("./routes/fornecedorRoute.js");
const clienteRoute = require("./routes/clienteRoute.js");
const armazemRoute = require("./routes/armazemRoute.js");
const localizacaoRoute = require("./routes/localizacaoModel.js");
const usuarioRoute = require("./routes/usuarioRoute.js");
app.use(express.json());

//rotas API;
app.use("/categoria", categoriaRoute);
//app.use("/movimentacoes", movimentacoesRoute);
app.use("/produto", produtoRoute);
app.use("/fornecedor", fornecedorRoute);
app.use("/cliente", clienteRoute);
app.use("/armazem", armazemRoute);
app.use("/localizacao", localizacaoRoute);
app.use("/usuario", usuarioRoute);

app.listen(3000, () => {
    console.log(`Servidor rodando na porta => 3000`);
});