const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // importa sua conexão

const Cliente = sequelize.define('Cliente', {
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
    tableName: 'cliente', // nome real da tabela
    timestamps: false       // desativa createdAt e updatedAt
});

module.exports = Cliente;
