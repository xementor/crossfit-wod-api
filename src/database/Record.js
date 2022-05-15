const DB = require("../database/db.json");

const getRecordForWorkout = (workoutId) =>{
    try {
        const record = DB.records.filter((record) => record.workout === workoutId);
        if(!record) throw {status: 400, data:{error: "cannot find workout id"}};
        return record;
    } catch (error) {
        throw {status: error.status || 500, data: {error: error.message || error}};
    }
}


module.exports = {getRecordForWorkout};