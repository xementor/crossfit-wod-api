const Workout = require("../database/Workout");
const { v4: uuid} = require("uuid");

const getAllworkouts = (filterParams) =>{
    try {
        const allWorkouts = Workout.getAllworkouts(filterParams);
        return allWorkouts;
    } catch (error) {
        throw error;
        
    }
}
const getOneWorkout = (workoutId) =>{
    try {
        const workout = Workout.getOneWorkout(workoutId);
        return workout;
        
    } catch (error) {
        throw error;
        
    }
}

const updateOneWorkout = (workoutId, body) =>{
    try {
        const updatedWorkout = Workout.updateOneWorkout(workoutId, body);
        return updatedWorkout;
    } catch (error) {
        throw error;
        
    }
}
const deleteOneWorkout = (workoutId) =>{
    try {
        const deletedWorkout = Workout.deleteOneWorkout(workoutId);
        return deletedWorkout;
    } catch (error) {
        throw error;
    }
}
const createNewWorkout = (newWorkout) =>{
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    }
    try {
        const  createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
        
    } catch (error) {
        throw error;
        
    }
}

module.exports = {getAllworkouts, getOneWorkout, updateOneWorkout, deleteOneWorkout, createNewWorkout};