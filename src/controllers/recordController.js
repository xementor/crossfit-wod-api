const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
    try {
        const {params: {workoutId}} = req;
        const record = recordService.getRecordForWorkout(workoutId);
    } catch (error) {
        throw {status: error.status || 500, data: {error: error.message || error}};
    }



}

module.exports = { getRecordForWorkout };