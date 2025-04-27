const Armazem = require("../models/armazemModel");

// Listar todos os armazens
async function listarArmazens(req, res) {
    try {
        const armazem = await Armazem.findAll();
        res.json(armazem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar armazem' });
    }
}

// Buscar armazem por ID
async function buscarArmazemPorId(req, res) {
    try {
        const { id } = req.params;
        const armazem = await Armazem.findByPk(id);

        if (!armazem) {
            return res.status(404).json({ erro: 'Armazem não encontrado.' });
        }

        res.json(armazem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar armazem.' });
    }
}

// Criar novo armazem
async function criarArmazem(req, res) {
    try {
        const { nome } = req.body;
        const novoArmazem = await Armazem.create({ nome });
        res.status(201).json(novoArmazem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar armazem.' });
    }
}

// Atualizar um armazem
async function atualizarArmazem(req, res) {
    try {
        const { id } = req.params;
        const { nome } = req.body;

        const armazem = await Armazem.findByPk(id);
        if (!armazem) {
            return res.status(404).json({ erro: 'Armazem não encontrado.' });
        }

        await armazem.update({ nome });
        res.json(armazem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar armazem.' });
    }
}

// Deletar um armazem
async function deletarArmazem(req, res) {
    try {
        const { id } = req.params;

        const armazem = await Armazem.findByPk(id);
        if (!armazem) {
            return res.status(404).json({ erro: 'Armazem não encontrado.' });
        }

        await armazem.destroy();
        res.json({ mensagem: 'Armazem deletado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar armazem.' });
    }
}

module.exports = {
    listarArmazens,
    buscarArmazemPorId,
    criarArmazem,
    atualizarArmazem,
    deletarArmazem
};
