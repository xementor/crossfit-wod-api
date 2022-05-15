const Member = require('../database/Member');
const getAllmembers = () =>{
    try {
        const members = Member.getAllmembers();
        if(!members) throw {error: error};
        return members;
        
    } catch (error) {
        throw {error: error}
    }
}

module.exports = {getAllmembers};