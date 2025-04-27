const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // importa sua conexão

const Categoria = sequelize.define('Categoria', {
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
        type: DataTypes.STRING(500),
        allowNull: false
    }
}, {
    tableName: 'categoria', // nome real da tabela
    timestamps: false       // desativa createdAt e updatedAt
});

module.exports = Categoria;
