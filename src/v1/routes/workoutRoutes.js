const express = require("express");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();

router.get("/", workoutController.getAllworkouts);

router.get("/:workoutId", workoutController.getOneworkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneworkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;