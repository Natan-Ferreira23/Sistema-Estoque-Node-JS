const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajusta o caminho para onde está sua conexão
const Armazem = require("../models/armazemModel");
const Fornecedor = require("../models/fornecedorModel");
const Cliente = require("../models/clienteModel");

const Localizacao = sequelize.define('Localizacao', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    fornecedorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'fornecedorId'
    },
    clienteId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'clienteId',
    },
    armazemId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'armazemInternoId'
    }
}, {
    tableName: 'localizacao', // nome da tabela real no banco
    timestamps: false // desativa createdAt e updatedAt
});

Armazem.belongsTo(Localizacao,
    {
        foreignKey: 'armazemId'
    }
);
Fornecedor.belongsTo(Armazem,
    {
        foreignKey: 'fornecedorId'
    }
);
Cliente.belongsTo(Localizacao,
    {
        foreignKey: 'clienteId'
    }
);

module.exports = Localizacao;
