const User = require("../models/tb_user.model");
var jwt = require("jsonwebtoken");

exports.loginUser = async (req, res, next) => {
  const { user_name, password } = req.body;
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
