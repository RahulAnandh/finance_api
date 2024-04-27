const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Birds home page");
});
router.get("/get_crediter", (req, res) => {
  res.send("About birds");
});
router.get("/get_all_crediters", (req, res) => {
  res.send("About birds");
});
router.post("/create_crediter", (req, res) => {
  res.send("About birds");
});
router.post("/update_crediter", (req, res) => {
  res.send("About birds");
});
router.delete("/delete_crediter", (req, res) => {
  res.send("About birds");
});

module.exports = router;
