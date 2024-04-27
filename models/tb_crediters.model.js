const { DataTypes, Model } = require("sequelize");
const sequelize = require("../index"); // Replace with your actual database connection

class Creditor extends Model {}

Creditor.init(
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
    modelName: "Creditor",
    tableName: "tb_crediters", // Set the actual table name
  }
);
sequelize
  .sync()
  .then(() => {
    console.log("tb_crediters table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Creditor;
