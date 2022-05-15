const DB = require("./db.json");
const getAllmembers = () =>{
    try {
        const members = DB.members;
        if(!members) throw {data: "somethings web wrong here"};
        return members;
        
    } catch (error) {
        throw {error: error.message || error};
        
    }
    
}

module.exports = {getAllmembers};