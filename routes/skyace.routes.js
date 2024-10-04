const express = require("express");
<<<<<<< HEAD
const {
  createSkyace,
  updateSkyace,
  getSkyace,
} = require("../controller/skyace.controller");
const router = express.Router();
=======
const { createSkyace, updateSkyace, getSkyace } = require("../controller/skyace.controller");
const SkyaceRouter = express.Router();
>>>>>>> df1b5baf362c31eb351d6d49962450c2b5714702

SkyaceRouter.post("/create", createSkyace);

<<<<<<< HEAD
router.patch("/updateskyace", updateSkyace);

router.get("/getskyace", getSkyace);
=======
SkyaceRouter.patch("/update/:id", updateSkyace);

SkyaceRouter.get("/", getSkyace);
>>>>>>> df1b5baf362c31eb351d6d49962450c2b5714702


module.exports = {SkyaceRouter};
