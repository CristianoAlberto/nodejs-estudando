const Animal = require("../models/animalModel");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



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

    buscarPorNomeRaca: async(info) => {
        try {
            const data = await Animal.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${info}%`
                    }
                }
            })

            if (data.length) return data
            const data2 = await Animal.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${info}%`
                    }
                }
            })
            if (data2.length) return data2
            return { message: "Não existe este animal" }
        } catch (error) {
            throw error
        }

    },

    actualizar: async(id, nome, raca, cor, foto) => {
        try {
            const validar = await Animal.findByPk(id)
            if (!validar.length) {
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