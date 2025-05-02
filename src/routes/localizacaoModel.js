const express = require('express');
const router = express.Router();
const localizacaoController = require('../controllers/localizacaoController');

router.get('/', localizacaoController.listarLocalizacoes);
router.get('/:id', localizacaoController.buscarLocalizacaoPorId);
router.post('/', localizacaoController.criarLocalizacao);
router.put('/:id', localizacaoController.atualizarLocalizacao);
router.delete('/:id', localizacaoController.deletarLocalizacao);

module.exports = router;
