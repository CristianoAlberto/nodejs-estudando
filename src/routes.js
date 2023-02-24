const express = require('express');
const router = express.Router();

const AnimalController = require('./controllers/AnimalController')

router.get('/animais', AnimalController.buscarTodos);
router.get('/animais/:id', AnimalController.buscarUm);
router.post('/animal', AnimalController.inserir);
router.delete('/animal/:id', AnimalController.deletar);
router.get('/animal/:nome', AnimalController.buscarPorNome);
router.put('/animal/:id', AnimalController.actualizar);

module.exports = router;