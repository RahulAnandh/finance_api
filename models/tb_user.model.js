const { DataTypes, Model } = require("sequelize");
const db = require("../util/database"); // Replace with your actual database connection

const User = db.define(
  "tb_user",
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
    user_name: {
      type: DataTypes.STRING(30),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(150),
    },
    privilege: {
      type: DataTypes.STRING(20),
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    db,
    modelName: "User",
    tableName: "tb_user", // Set the actual table name
  }
);

module.exports = User;

// class User extends Model {}

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     date: {
//       type: DataTypes.DATE,
//     },
//     deleted: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     first_name: {
//       type: DataTypes.STRING(10),
//     },
//     last_name: {
//       type: DataTypes.STRING(10),
//     },
//     user_name: {
//       type: DataTypes.STRING(30),
//       unique: true,
//     },
//     password_string: {
//       type: DataTypes.STRING(150),
//     },
//     privilege: {
//       type: DataTypes.STRING(20),
//     },
//     createdAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//     updatedAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//   },
//   {
//     sequelize,
//     modelName: "User",
//     tableName: "tb_user", // Set the actual table name
//   }
// );
db.sync()
  .then(() => {
    console.log("tb_user table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = User;
