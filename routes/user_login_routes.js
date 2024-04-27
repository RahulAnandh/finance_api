const express = require("express");
const router = express.Router();
const UserLoginController = require("../controllers/tb_user_login.controller");

router.post("/login", UserLoginController.loginUser);

module.exports = router;
