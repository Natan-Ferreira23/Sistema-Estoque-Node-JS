const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sistemaEstoque', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});

async function conectar() {
    try {
        await sequelize.authenticate();
        console.log('Conectado com sucesso!');
    } catch (error) {
        console.error('Erro na conexão:', error);
    }
}

conectar();
module.exports = sequelize;
