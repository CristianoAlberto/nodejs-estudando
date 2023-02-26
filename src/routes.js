const express = require('express');
const router = express.Router();

const AnimalController = require('./controllers/AnimalController')
const UsuarioController = require('./controllers/UsuarioController');

router.get('/animais', AnimalController.buscarTodos);
router.get('/animais/:id', AnimalController.buscarUm);
router.post('/animal', AnimalController.inserir);
router.delete('/animalDelete/:id', AnimalController.deletar);
router.get('/animalFiltro/:nome', AnimalController.buscarPorNome);
router.put('/animalActualizar/:id', AnimalController.actualizar);

router.get('/usuarios', UsuarioController.buscarTodos);
router.get('/usuario/:info', UsuarioController.filtroUsuarioNomeEmail);

module.exports = router;