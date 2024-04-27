const express = require("express");
const router = express.Router();

router.get("/get_employee", (req, res) => {
  res.send("GET EMPLOYEE");
});
router.get("/get_all_employees", (req, res) => {
  res.send("About birds");
});
router.post("/create_employee", (req, res) => {
  res.send("About birds");
});
router.post("/update_employee", (req, res) => {
  res.send("About birds");
});
router.delete("/delete_employee", (req, res) => {
  res.send("About birds");
});

module.exports = router;
