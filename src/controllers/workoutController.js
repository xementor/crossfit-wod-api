const workoutService = require("../services/workoutService");

const getAllworkouts = (req, res) => {
    const workouts = workoutService.getAllworkouts();
    res.send({status: 'OK', data : workouts});
}
const getOneworkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get one specific workouts");
}
const updateOneworkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout();
    res.send("Update one workout");
}
const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Deleting one workout");
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
    ) return;

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }

    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createNewWorkout});
}

module.exports = {getAllworkouts, getOneworkout, updateOneworkout, deleteOneWorkout, createNewWorkout};