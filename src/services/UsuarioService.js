const Usuario = require('../models/usuarioModel');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    buscarTodos: async() => {
        const data = await Usuario.findAll();
        Usuario.sync();
        if (data)
            if (data == '') { return { message: "Não existe nenhum usuário registado" } } else
                return data;
    },

    filtro: async(info) => {
        try {
            const data = await Usuario.findAll({
                where: {
                    nome: {
                        [Op.like]: `${info}%`
                    }
                }
            })
            if (data == '') {
                return { message: "Não existe este usuario" }
            } else {
                return data
            }

        } catch (error) {
            throw error
        }
    }

}