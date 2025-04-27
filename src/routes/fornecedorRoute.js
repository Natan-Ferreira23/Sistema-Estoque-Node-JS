const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedorController.js');

router.get('/', fornecedorController.listarFornecedores);
router.get('/:id', fornecedorController.buscarFornecedorPorId);
router.post('/', fornecedorController.criarFornecedor);
router.put('/:id', fornecedorController.atualizarFornecedor);
router.delete('/:id', fornecedorController.deletarFornecedor);

module.exports = router;
