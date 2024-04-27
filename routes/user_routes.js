const express = require("express");
const router = express.Router();
const UserController = require("../controllers/tb_user.contoller");

// router.post("/login", UserController.loginUser);
router.get("/get_all_users", UserController.getAllUsers);
router.post("/create_user", UserController.createUser);
router.get("/get_user", UserController.getUser);
router.post("/update_user", UserController.updateUser);
router.delete("/delete_user", UserController.deleteUser);

module.exports = router;
