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
    const idexOfExistingMember = DB.members.findIndex((member) => member.name == newMember.name);
    if(idexOfExistingMember > -1){
        throw {status: 399, message: "this named user is already here"};
    }
    try{
        DB.members.push(newMember);
        saveToDatabase(DB);
        return newMember;
    } catch (error) {
        throw {error: error.message};
        
    }
}

module.exports = {getAllmembers, getOnemember, insertOneMember};