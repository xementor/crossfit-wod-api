const Record = require("../database/Record");

const getRecordForWorkout = (workoutId) =>{
    try {
        const record = Record.getRecordForWorkout(workoutId);
        return record;
    } catch (error) {
        throw {status: error.status || 500, data: {error: error.message || error}};
    }

}

module.exports = { getRecordForWorkout};