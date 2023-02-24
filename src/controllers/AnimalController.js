const AnimalService = require('../services/AnimalService');


module.exports = {

    buscarTodos: async(req, res) => { res.json(await AnimalService.buscarTodos()); },

    buscarUm: async(req, res) => { res.json(await AnimalService.buscarUm(req.params.id)); },

    inserir: async(req, res) => {
        let { nome, raca, cor, foto } = req.body;
        const data = await AnimalService.inserir(nome, raca, cor, foto)
        res.status(200).json(data)
    },

    deletar: async(req, res) => { res.json(await AnimalService.deletar(req.params.id)); },

    buscarPorNome: async(req, res) => { res.json(await AnimalService.buscarPorNome(req.params.nome)) },

    actualizar: async(req, res) => {
        let { nome, raca, cor, foto } = req.body;
        const data = await AnimalService.actualizar(req.params.id, nome, raca, cor, foto)
        res.status(200).json(data)
    }






}