const User = require("../models/tb_user.model");
var jwt = require("jsonwebtoken");

exports.loginUser = async (req, res, next) => {
  const { user_name, password } = req.body;
  console.log("AAA 1", req.body);
  const user = await User.findOne({
    where: { user_name: user_name, password: password },
  })
    .then((user) => {
      if (user !== null) {
        const privilege = user.privilege;
        const user_name = user.user_name;
        const token = jwt.sign({ user }, "my_secret_key");
        res.status(200).json({
          token: `bearer ${token}`,
          current_authority: privilege,
          status: "ok",
          user_name: user_name,
          login_status: "ok",
        });
      }
      //   res.status(200).json({ user: user });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, user_name, password, privilege, deleted } =
      req.body;
    const day = new Date();
    const date = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDay()}`;
    const newUser = await User.create({
      first_name,
      last_name,
      user_name,
      password,
      privilege,
      deleted,
      date,
    });
    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
exports.getUser = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getAllUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.updateUser = (req, res, next) => {
  console.log(req.body);
};
exports.deleteUser = (req, res, next) => {
  console.log(req.body);
};
