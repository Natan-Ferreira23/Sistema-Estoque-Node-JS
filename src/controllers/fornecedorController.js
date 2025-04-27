const Fornecedor = require('../models/fornecedorModel');

// Listar todos os fornecedores
async function listarFornecedores(req, res) {
    try {
        const fornecedor = await Fornecedor.findAll();
        res.json(fornecedor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar fornecedores' });
    }
}

// Buscar fornecedor por ID
async function buscarFornecedorPorId(req, res) {
    try {
        const { id } = req.params;
        const fornecedor = await Fornecedor.findByPk(id);

        if (!fornecedor) {
            return res.status(404).json({ erro: 'Fornecedor  não encontrado.' });
        }

        res.json(fornecedor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar fornecedor.' });
    }
}

// Criar novo fornecedor
async function criarFornecedor(req, res) {
    try {
        const { nome } = req.body;
        const novoFornecedor = await Fornecedor.create({ nome });
        res.status(201).json(novoFornecedor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar fornecedor.' });
    }
}

// Atualizar um fornecedor
async function atualizarFornecedor(req, res) {
    try {
        const { id } = req.params;
        const { nome } = req.body;

        const fornecedor = await Fornecedor.findByPk(id);
        if (!fornecedor) {
            return res.status(404).json({ erro: 'Categoria não encontrada.' });
        }

        await fornecedor.update({ nome });
        res.json(fornecedor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar fornecedor.' });
    }
}

// Deletar um fornecedor
async function deletarFornecedor(req, res) {
    try {
        const { id } = req.params;

        const fornecedor = await Fornecedor.findByPk(id);
        if (!fornecedor) {
            return res.status(404).json({ erro: 'Fornecedor não encontrado.' });
        }

        await fornecedor.destroy();
        res.json({ mensagem: 'Fornecedor deletado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar fornecedor.' });
    }
}

module.exports = {
    listarFornecedores,
    buscarFornecedorPorId,
    criarFornecedor,
    atualizarFornecedor,
    deletarFornecedor
};
