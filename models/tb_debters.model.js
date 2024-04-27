const { DataTypes, Model } = require("sequelize");
const sequelize = require("../index"); // Replace with your actual database connection

class Debter extends Model {}

Debter.init(
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
    name: {
      type: DataTypes.STRING(30),
    },
    gst_address: {
      type: DataTypes.STRING(50),
    },
    type: {
      type: DataTypes.STRING(30),
    },
    gst_number: {
      type: DataTypes.STRING(20),
    },
  },
  {
    sequelize,
    modelName: "Debter",
    tableName: "tb_debters", // Set the actual table name
  }
);
sequelize
  .sync()
  .then(() => {
    console.log("tb_debters table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Debter;
