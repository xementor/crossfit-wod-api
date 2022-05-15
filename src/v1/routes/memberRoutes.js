const express = require('express');
const memberController = require("../../controllers/memberController");

const router = express.Router();

router.get("/", memberController.getAllmembers);
router.get("/:memberId",memberController.getOnemember);

module.exports = router;