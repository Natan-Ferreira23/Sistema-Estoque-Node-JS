const Categoria = require('../models/categoriaModel');

// Listar todas as categorias
async function listarCategorias(req, res) {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar categorias.' });
    }
}

// Buscar categoria por ID
async function buscarCategoriaPorId(req, res) {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return res.status(404).json({ erro: 'Categoria não encontrada.' });
        }

        res.json(categoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar categoria.' });
    }
}

// Criar nova categoria
async function criarCategoria(req, res) {
    try {
        const { nome, descricao } = req.body;
        const novaCategoria = await Categoria.create({ nome, descricao });
        res.status(201).json(novaCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar categoria.' });
    }
}

// Atualizar uma categoria
async function atualizarCategoria(req, res) {
    try {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ erro: 'Categoria não encontrada.' });
        }

        await categoria.update({ nome, descricao });
        res.json(categoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar categoria.' });
    }
}

// Deletar uma categoria
async function deletarCategoria(req, res) {
    try {
        const { id } = req.params;

        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ erro: 'Categoria não encontrada.' });
        }

        await categoria.destroy();
        res.json({ mensagem: 'Categoria deletada com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar categoria.' });
    }
}

module.exports = {
    listarCategorias,
    buscarCategoriaPorId,
    criarCategoria,
    atualizarCategoria,
    deletarCategoria
};
