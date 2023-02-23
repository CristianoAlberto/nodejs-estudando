const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão feita com sucesso!");
}).catch(function(){
    console.log("Erro! Conexão não estabelecida");
});

module.exports=sequelize;