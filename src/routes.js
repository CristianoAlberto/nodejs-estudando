const express = require('express');
const router = express.Router();

const AnimalController = require('./controllers/AnimalController')
const UsuarioController = require('./controllers/UsuarioController');

router.get('/animais', AnimalController.buscarTodos);
router.get('/animalId/:id', AnimalController.buscarUm);
router.post('/animal', AnimalController.inserir);
router.delete('/animalDelete/:id', AnimalController.deletar);
router.get('/animalFiltro/:info', AnimalController.buscarPorNomeRaca);
router.put('/animalActualizar/:id', AnimalController.actualizar);

router.get('/usuarios', UsuarioController.buscarTodos);
router.get('/usuarioFiltro/:info', UsuarioController.filtroUsuarioNomeEmail);
router.get('/usuarioId/:id', UsuarioController.buscarPorId);
router.post('/usuarioInserir', UsuarioController.inserirUsuario);
router.put('/usuarioActualizar/:id', UsuarioController.actualizarUsuario);
router.delete('/usuaroDelete/:id', UsuarioController.deletarUsuario);


module.exports = router;