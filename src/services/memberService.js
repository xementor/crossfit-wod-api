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
const getOnemember = (memberId) =>{
    try {
        const member = Member.getOnemember(memberId);
        return member;
    } catch (error) {
        throw error;
        
    }
}

const {v4: uuid} = require("uuid");
const addOnemember = (newMember) =>{
    const memberToAdd = {
        id: uuid(),
        ...newMember
    }
    try {
        const createdMember = Member.insertOneMember(memberToAdd);
        return createdMember;
    } catch (error) {
        throw {error: error.message};
        
    }
}

module.exports = {getAllmembers, getOnemember, addOnemember};