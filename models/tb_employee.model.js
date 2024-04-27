const { DataTypes, Model } = require("sequelize");
const sequelize = require("../index"); // Replace with your actual database connection

class Employee extends Model {}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(10),
    },
    last_name: {
      type: DataTypes.STRING(10),
    },
    house_name: {
      type: DataTypes.STRING(30),
    },
    nationality: {
      type: DataTypes.STRING(20),
    },
    state: {
      type: DataTypes.STRING(20),
    },
    home_town: {
      type: DataTypes.STRING(20),
    },
    contact: {
      type: DataTypes.STRING(30),
    },
    email: {
      type: DataTypes.STRING(50),
    },
    designation: {
      type: DataTypes.STRING(30),
    },
    id_type: {
      type: DataTypes.STRING(30),
    },
    bank_name: {
      type: DataTypes.STRING(30),
    },
    name_in_passbook: {
      type: DataTypes.STRING(30),
    },
    account_number: {
      type: DataTypes.STRING(30),
    },
    ifsc_code: {
      type: DataTypes.STRING(20),
    },
  },
  {
    sequelize,
    modelName: "Employee",
    tableName: "tb_employee", // Set the actual table name
  }
);
sequelize
  .sync()
  .then(() => {
    console.log("tb_employee table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Employee;
