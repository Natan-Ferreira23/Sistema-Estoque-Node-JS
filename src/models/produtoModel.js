const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajusta o caminho para onde está sua conexão
const Categoria = require("../models/categoriaModel");
const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categoriaId'
    }
}, {
    tableName: 'produto', // nome da tabela real no banco
    timestamps: false // desativa createdAt e updatedAt
});
Produto.belongsTo(Categoria,
    {
        foreignKey: 'categoriaId'
    });
module.exports = Produto;
