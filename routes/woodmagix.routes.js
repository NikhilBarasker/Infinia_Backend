const express = require("express");
<<<<<<< HEAD
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
=======
const { handlecreateWoodmagix, handleGetAllWoodmagix, handleUpdateWoodmagix, handleDeleteWoodmagix } = require("../controller/woodmagix.controller");
const WoodmagixRouter = express.Router();


WoodmagixRouter.post("/create",handlecreateWoodmagix);
WoodmagixRouter.get("/",handleGetAllWoodmagix);
WoodmagixRouter.patch("/update/:id",handleUpdateWoodmagix);
WoodmagixRouter.delete("/:id",handleDeleteWoodmagix)
module.exports = {WoodmagixRouter};
>>>>>>> df1b5baf362c31eb351d6d49962450c2b5714702
