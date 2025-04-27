const Produto = require('../models/produtoModel');
const Categoria = require('../models/categoriaModel');
const CategoriaProduto = require('../models/categoriaEprodutosModel');
// Listar todos os produtos
async function listarProdutos(req, res) {
    try {
        const produtos = await Produto.findAll({
            include: [{ model: Categoria }] // já traz a categoria junto
        });
        res.json(produtos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar produtos.' });
    }
}

// Buscar um produto por ID
async function buscarProdutoPorId(req, res) {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id, {
            include: [{ model: Categoria }]
        });

        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }

        res.json(produto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar o produto.' });
    }
}

// Criar novo produto
async function criarProduto(req, res) {
    try {
        const { nome, descricao, categoriaId } = req.body;

        const novoProduto = await Produto.create({
            nome,
            descricao,
            categoriaId
        });

        res.status(201).json(novoProduto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar produto.' });
    }
}

// Atualizar um produto
async function atualizarProduto(req, res) {
    try {
        const { id } = req.params;
        const { nome, descricao, categoriaId } = req.body;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }

        await produto.update({
            nome,
            descricao,
            categoriaId
        });

        res.json(produto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar produto.' });
    }
}

// Deletar produto
async function deletarProduto(req, res) {
    try {
        const { id } = req.params;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }

        await produto.destroy();

        res.json({ mensagem: 'Produto deletado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar produto.' });
    }
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    deletarProduto
};
