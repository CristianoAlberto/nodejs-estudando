const UsuarioService = require('../services/UsuarioService');

module.exports = {
    buscarTodos: async(req, res) => { res.json(await UsuarioService.buscarTodos()) }
}