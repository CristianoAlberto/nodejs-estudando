const db = require('../models/db');
const Animal = require("../models/animalModel");
const sequelize = require('../models/db');
const { or } = require('sequelize');

module.exports = {

    buscarTodos: () => {
        try {
            const data = Animal.findAll();
            if (data)
                if (data === '')
                    return { message: "Não tem nada registado por enquanto" }
            return data

        } catch (error) {
            throw error
        }
    },

    buscarUm: async(id) => {
        try {
            if (id) {
                const data = await Animal.findByPk(id)
                Animal.sync();
                if (data === null) return { message: "Não existe esse id" }
                return data
            }
            return { message: "Error" }
        } catch (error) {
            throw (error)
        }
    },

    inserir: async(nome, raca, cor, foto) => {
        try {
            if (nome && raca && cor && foto) {
                const data = await Animal.create({ nome, raca, cor, foto })
                Animal.sync()
                return data
            }
            return { message: "Erro" }
        } catch (error) {
            throw error
        }
    },

    deletar: async(id) => {
        try {
            const data = await Animal.destroy({ where: { id: id } })
            Animal.sync()
            if (data)
                return { message: "Excluido com sucesso" }
            return { message: "Não existe esse registo" }
        } catch (error) {
            throw error
        }
    },

    buscarPorNome: async(nome) => {
        try {
            const data = await Animal.findOne({ where: { nome: nome } })
            Animal.sync()
            if (data === null) {
                return { message: "Não existe esse registo" }
            } else {
                return data
            }
        } catch (error) {
            throw error
        }

    },

    actualizar: async(id, nome, raca, cor, foto) => {
        try {
            const validar = await Animal.findByPk(id)
            if (validar != null) {
                const data = await Animal.update({ nome: nome, raca: raca, cor: cor, foto: foto }, { where: { id: id } });
                Animal.sync();
                return { message: "Actualizado com sucesso" }
            } else {
                return { message: "Não existe esse registo" }
            }
        } catch (error) {
            throw error
        }

    }


}