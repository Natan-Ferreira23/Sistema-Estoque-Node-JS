const express = require('express');
const router = express.Router();
const armazemController = require('../controllers/armazemController.js');

router.get('/', armazemController.listarArmazens);
router.get('/:id', armazemController.buscarArmazemPorId);
router.post('/', armazemController.criarArmazem);
router.put('/:id', armazemController.atualizarArmazem);
router.delete('/:id', armazemController.deletarArmazem);

module.exports = router;
