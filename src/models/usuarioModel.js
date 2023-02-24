const Sequelize = require('sequelize')
const db = require('./db')

const Usuario = db.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    palavraPasse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    }

})
Usuario.sync()

module.exports = Usuario;