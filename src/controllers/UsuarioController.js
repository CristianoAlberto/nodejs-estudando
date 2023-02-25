const UsuarioService = require('../services/UsuarioService');

module.exports = {
    buscarTodos: async(req, res) => { res.json(await UsuarioService.buscarTodos()) },

    filtro: async(req, res) => { res.json(await UsuarioService.filtro(req.params.info)) }
}