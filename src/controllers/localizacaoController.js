const Localizacao = require('../models/localizacaoModel');

// Listar todos os localizacao
async function listarLocalizacoes(req, res) {
    try {
        const localizacao = await Localizacao.findAll();
        res.json(localizacao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar localizações' });
    }
}

// Buscar localizacao ID
async function buscarLocalizacaoPorId(req, res) {
    try {
        const { id } = req.params;
        const localizacao = await Localizacao.findByPk(id);

        if (!localizacao) {
            return res.status(404).json({ erro: 'Localizacao  não encontrado.' });
        }

        res.json(localizacao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar localizacao.' });
    }
}

// Criar nova localizacao
async function criarLocalizacao(req, res) {
    try {
        const { descricao, tipo, fornecedorId, clienteId, armazemId } = req.body;
        const novaLocalizacao = await Localizacao.create({ descricao, tipo, fornecedorId, clienteId, armazemId });
        res.status(201).json(novaLocalizacao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar localização.' });
    }
}

// Atualizar uma localizacao
async function atualizarLocalizacao(req, res) {
    try {
        const { id } = req.params;
        const { descricao, tipo, fornecedorId, clienteId, armazemId } = req.body;

        const localizacao = await Localizacao.findByPk(id);
        if (!localizacao) {
            return res.status(404).json({ erro: 'Localização não encontrada.' });
        }

        await localizacao.update({ descricao, tipo, fornecedorId, clienteId, armazemId });
        res.json(localizacao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar localização.' });
    }
}

// Deletar um fornecedor
async function deletarLocalizacao(req, res) {
    try {
        const { id } = req.params;

        const localizacao = await Localizacao.findByPk(id);
        if (!localizacao) {
            return res.status(404).json({ erro: 'Localização não encontrado.' });
        }

        await localizacao.destroy();
        res.json({ mensagem: 'Localização deletada com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar localização.' });
    }
}

module.exports = {
    listarLocalizacoes,
    buscarLocalizacaoPorId,
    criarLocalizacao,
    atualizarLocalizacao,
    deletarLocalizacao
};
