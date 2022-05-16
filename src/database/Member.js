const DB = require("./db.json");
const { saveToDatabase } = require("./utils");
const getAllmembers = () =>{
    try {
        const members = DB.members;
        if(!members) throw {data: "somethings web wrong here"};
        return members;
        
    } catch (error) {
        throw {error: error.message || error};
        
    }
    
}

const getOnemember = (memberId) =>{
    try {
        const member = DB.members.find((member) => member.id === memberId)
        if(!member) throw {status: 400, message: `member with this id ${memberId} cannot fouond in db`}
        return member;
    } catch (error) {
        throw {error: error};
        
    }
}

const insertOneMember = (newMember) =>{
    try {
        const isAlreadyAdded = DB.members.findIndex((member) => member.name == newMember.name);
        if(isAlreadyAdded) throw {status: 399, message: "this named user is already here"};
        
        DB.members.push(newMember);
        saveToDatabase.saveToDatabase(DB);
    } catch (error) {
        throw {error: error};
        
    }
}

module.exports = {getAllmembers, getOnemember};