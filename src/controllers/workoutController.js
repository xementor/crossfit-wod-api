const workoutService = require("../services/workoutService");

const getAllworkouts = (req, res) => {
    const {mode} = req.query;
    try {
        const workouts = workoutService.getAllworkouts({mode});
        res.send({status: 'OK', data : workouts});
    } catch (error) {
        res.status(error.status || 500).send({status: "Failed", data: {error: error.message || error}});
        
    }
}
const getOneworkout = (req, res) => {
    const { params: {workoutId} } = req;
    if(!workoutId) res.status(400).send({status: "failed", data: {error: "workoutId cannot be empty"}});

    try {
        const workout = workoutService.getOneWorkout(workoutId);
        res.send({data: workout});
    } catch (error) {
        res.status(error.status || 500).send({status: "Failed", data: {error: error.message || error}});
    }
}
const updateOneworkout = (req, res) => {
    const {body, params:{workoutId}} = req;

    if(!workoutId) res.status(400).send({status: "failed", data: {error: "workoutId cannot be empty"}});

    try {
        const updateWorkout = workoutService.updateOneWorkout(workoutId, body);
        res.send({status: "OK", data: updateOneworkout});
        
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message || error}});
    }
}
const deleteOneWorkout = (req, res) => {

    const { params: {workoutId} } = req;
    if(!workoutId) res.status(400).send({status: "failed", data: {error: "workoutId cannot be empty"}});

    try {
        const deletedWorkout = workoutService.deleteOneWorkout(workoutId);
        res.send({status: "OK", data: deletedWorkout});
    } catch (error) {
        res.status(error.status || 500).send({status: "Failed", data: {error: error.message || error}});
    }
}
const createNewWorkout = (req, res) => {
    const {body} = req;

    // validation
    if(
        !body.name||
        !body.equipment ||
        !body.mode ||
        !body.exercises ||
        !body.trainerTips 
    ) res.status(400).send({status: "Failed", data: {error: "there is something missing in input are"}});

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }

    try {
        const createdWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({status: "OK", data: createNewWorkout});
    } catch (error) {
        res.status(error.status || 500).send({status: "Failed", data: {error: error.message || error}});
    }
}

module.exports = {getAllworkouts, getOneworkout, updateOneworkout, deleteOneWorkout, createNewWorkout};