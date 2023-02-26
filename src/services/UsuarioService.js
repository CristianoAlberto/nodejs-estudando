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


    filtroUsuarioNomeEmail: async(info) => {
        try {
            const data = await Usuario.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${info}%`
                    }
                }
            })
            if (data.length) return data
            const data2 = await Usuario.findAll({
                where: {
                    email: {
                        [Op.like]: `%${info}%`
                    }
                }
            })
            if (data.length) return data2
            return { message: "Não existe este usuario" }
        } catch (error) {
            throw error
        }
    }

}