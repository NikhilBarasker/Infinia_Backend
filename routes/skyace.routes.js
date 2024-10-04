const express = require("express");
const {
  createSkyace,
  updateSkyace,
  getSkyace,
} = require("../controller/skyace.controller");
const router = express.Router();

router.post("/skyace", createSkyace);

router.patch("/updateskyace", updateSkyace);

router.get("/getskyace", getSkyace);


module.exports = router;
