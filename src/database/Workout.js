const DB = require("./db.json");
const  saveToDatabase = require("./utils");

const getAllworkouts = () =>{
    return DB.workouts;
}

const createNewWorkout = (newWorkout) =>{
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(isAlreadyAdded) return;
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;

}

module.exports = {getAllworkouts,createNewWorkout};