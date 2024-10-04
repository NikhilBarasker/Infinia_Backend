const express = require("express");
const router = express.Router();
const {
  createWoodmagix,
  getAllWoodmagix,
  getWoodmagixById,
  updateWoodmagix,
  deleteWoodmagix,
} = require("../controller/woodmagix.controller");

// Routes for CRUD operations
router.post("/create", createWoodmagix);
router.get("/getwoodmagix", getAllWoodmagix);
// router.get("/:id", getWoodmagixById);
router.patch("/updatewoodmagix/:id", updateWoodmagix); 
// router.delete("/:id", deleteWoodmagix);

module.exports = router;  
