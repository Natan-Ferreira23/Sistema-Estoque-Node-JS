const Cliente = require("../models/clienteModel");

// Listar todos os clientes
async function listarClientes(req, res) {
    try {
        const cliente = await Cliente.findAll();
        res.json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar clientes' });
    }
}

// Buscar cliente por ID
async function buscarClientePorId(req, res) {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ erro: 'Cliente  não encontrado.' });
        }

        res.json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar cliente.' });
    }
}

// Criar novo cliente
async function criarCliente(req, res) {
    try {
        const { nome } = req.body;
        const novoCliente = await Cliente.create({ nome });
        res.status(201).json(novoCliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar cliente.' });
    }
}

// Atualizar um cliente
async function atualizarCliente(req, res) {
    try {
        const { id } = req.params;
        const { nome } = req.body;

        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ erro: 'Cliente não encontrado.' });
        }

        await cliente.update({ nome });
        res.json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar cliente.' });
    }
}

// Deletar um cliente
async function deletarCliente(req, res) {
    try {
        const { id } = req.params;

        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ erro: 'Cliente não encontrado.' });
        }

        await cliente.destroy();
        res.json({ mensagem: 'Cliente deletado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar cliente.' });
    }
}

module.exports = {
    listarClientes,
    buscarClientePorId,
    criarCliente,
    atualizarCliente,
    deletarCliente
};
