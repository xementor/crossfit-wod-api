const express = require('express');
const memberController = require("../../controllers/memberController");

const router = express.Router();

router.get("/", memberController.getAllmembers);
router.get("/:memberId",memberController.getOnemember);
router.post("/", memberController.addOnemember);

module.exports = router;