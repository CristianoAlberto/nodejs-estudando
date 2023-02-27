const UsuarioService = require('../services/UsuarioService');

module.exports = {
    buscarTodos: async(req, res) => { res.json(await UsuarioService.buscarTodos()) },

    filtroUsuarioNomeEmail: async(req, res) => { res.json(await UsuarioService.filtroUsuarioNomeEmail(req.params.info)) },

    buscarPorId: async(req, res) => { res.json(await UsuarioService.buscarPorId(req.params.id)) },

    inserirUsuario: async(req, res) => {
        const { nome, email, palavraPasse, telefone } = req.body
        const data = await UsuarioService.inserirUsuario(nome, email, palavraPasse, telefone)
        res.status(201).json(data)
    },

    actualizarUsuario: async(req, res) => {
        const { nome, email, palavraPasse, telefone } = req.body
        const data = await UsuarioService.actualizarUsuario(req.params.id, nome, email, palavraPasse, telefone)
        res.status(200).json(data)
    },

    deletarUsuario: async(req, res) => { res.json(await UsuarioService.deletarUsuario(req.params.id)) }

}