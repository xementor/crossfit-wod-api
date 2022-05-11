const getAllworkouts = (req, res) => {
    res.send("Get all the workouts");
}
const getOneworkout = (req, res) => {
    res.send("Get one specific workouts");
}
const updateOneworkout = (req, res) => {
    res.send("Update one workout");
}
const deleteOneWorkout = (req, res) => {
    res.send("Deleting one workout");
}
const createNewWorkout = (req, res) => {
    res.send("A new workout created");
}

module.exports = {getAllworkouts, getOneworkout, updateOneworkout, deleteOneWorkout, createNewWorkout};