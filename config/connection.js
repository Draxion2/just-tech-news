// import the Sequelize constructor from the library
const Sequelize = require("sequelize");

// create connection to our database, pass in your MySQL info for username & password
const sequelize = new Sequelize("just_tech_news_db", "root", "draxion2Hjm.", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;