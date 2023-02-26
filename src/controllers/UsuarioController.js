const UsuarioService = require('../services/UsuarioService');

module.exports = {
    buscarTodos: async(req, res) => { res.json(await UsuarioService.buscarTodos()) },

    filtroUsuarioNomeEmail: async(req, res) => { res.json(await UsuarioService.filtroUsuarioNomeEmail(req.params.info)) },

    inserirUsuario: async(req, res) => {
        const { nome, email, palavraPasse, telefone } = req.body
        const data = await UsuarioService.inserirUsuario(nome, email, palavraPasse, telefone)
        res.status(201).json(data)
    }
}