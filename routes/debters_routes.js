const express = require("express");
const router = express.Router();

router.get("/get_debter", (req, res) => {
  res.send("About birds");
});
router.get("/get_all_debters", (req, res) => {
  res.send("About birds");
});
router.post("/create_debter", (req, res) => {
  res.send("About birds");
});
router.post("/update_debter", (req, res) => {
  res.send("About birds");
});
router.delete("/delete_debter", (req, res) => {
  res.send("About birds");
});

module.exports = router;
