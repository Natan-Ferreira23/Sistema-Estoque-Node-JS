const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // importa sua conexão

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(350),
        allowNull: false
    }
}, {
    tableName: 'usuario', // nome real da tabela
    timestamps: false      // desativa createdAt e updatedAt
});

module.exports = Usuario;
