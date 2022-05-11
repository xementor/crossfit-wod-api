const Workout = require("../database/Workout");
const { v4: uuid} = require("uuid");

const getAllworkouts = () =>{
    const allWorkouts = Workout.getAllworkouts();
    return allWorkouts;
}
const getOneWorkout = () =>{
    return ;
}

const updateOneWorkout = () =>{
    return ;
}
const deleteOneWorkout = () =>{
    return ;
}
const createNewWorkout = (newWorkout) =>{
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    }
    const  createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
}

module.exports = {getAllworkouts, getOneWorkout, updateOneWorkout, deleteOneWorkout, createNewWorkout};