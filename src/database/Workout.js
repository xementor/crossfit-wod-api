const DB = require("./db.json");
const  saveToDatabase = require("./utils");

const getAllworkouts = () =>{
    try {
        return DB.workouts;
    } catch (error) {
        throw {status: 500, message: error.message || error};
        
    }
}

const createNewWorkout = (newWorkout) =>{
    try{
        const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -2;
        if(isAlreadyAdded) throw {status: 399, message: `workout with the name: ${newWorkout.name} is already exits`};

        DB.workouts.push(newWorkout);
        saveToDatabase.saveToDatabase(DB);
        return newWorkout;
    }catch(error){
        throw {status: 500, message: error.message || error};
    }

}

const getOneWorkout = (workoutId) =>{

    try {
        console.log(DB.workouts);
        const workout = DB.workouts.find((workout) => workout.id === workoutId)
        if(!workout){
            throw {
                status: 400,
                message:  `workout canot found with thid id: ${workoutId}`,
            }
        }
        return workout;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || error};
        
    }

}
const updateOneWorkout = (workoutId, body) => {
    try {
        const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === body.name) > -1;
        if (isAlreadyAdded) {
            throw {status: 400, message: "changes with the same name already exists"};
        }
        const indexForChanges = DB.workouts.findIndex((workout) => workout.id === workoutId);

        if(indexForChanges === -1){
            throw{ status: 400, message: "CAnnot find the workout with this id"};
        }
        const updatedWorkout = {
            ...DB.workouts[indexForChanges],
            ...body,
            updatedAt: new Date().tolocalString("en-US", {timeZone: "UTC"}),
        }
        
        DB.workouts[indexForChanges] = updatedWorkout;
        saveToDatabase.saveToDatabase(DB);
        return updatedWorkout;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || error};
    }
}
const deleteOneWorkout = (workoutId) => {
    try {
        const indexForChanges = BD.workouts.findIndex((workout) => workout.id === workoutId);

        if(indexForChanges === -1){
            throw{ status: 400, message: "CAnnot find the workout with this id"};
        }
        DB.workouts.splice(indexForChanges, 1);
        saveToDatabase.saveToDatabase(DB);
        
    } catch (error) {
        throw { status: error.status || 500, message: error.message || error};

        
    }
}

module.exports = {updateOneWorkout,deleteOneWorkout,getAllworkouts,createNewWorkout, getOneWorkout};