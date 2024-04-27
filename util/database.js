const Sequelize = require("sequelize");
const {
  DATABASE_USER_NAME,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  API_PORT,
} = require("../constants");
const sequelize = new Sequelize(
     DATABASE_NAME,
    DATABASE_USER_NAME,
    DATABASE_PASSWORD,
    {
      dialect: "postgres",
      port: DATABASE_PORT,
      host: DATABASE_HOST,
    })

    module.exports = sequelize