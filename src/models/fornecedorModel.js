const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // importa sua conexão

const Fornecedor = sequelize.define('Fornecedor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, {
    tableName: 'fornecedor', // nome real da tabela
    timestamps: false       // desativa createdAt e updatedAt
});

module.exports = Fornecedor;
