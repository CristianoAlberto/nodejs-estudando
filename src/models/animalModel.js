const Sequelize = require('sequelize');
const db = require('./db');
//const sequelize = new Sequelize('splite::memory:');
const Animal = db.define('animal', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    raca: {
        type: Sequelize.STRING,
        allowNull: false,

    },

    cor: {
        type: Sequelize.STRING,
        allowNull: false,

    },

    foto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    }

});

Animal.sync();

module.exports = Animal;