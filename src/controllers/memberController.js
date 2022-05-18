const memberService = require("../services/memberService");
const getAllmembers = (req,res) =>{
    try {
        const members = memberService.getAllmembers();
        res.send({status: "ok", data: members});
        
    } catch (error) {
        res.status(error.status || 500).send(
            {
                status: "Failed",
                data: {error: error.message || erro}
            }
        );
        
    }
}

const getOnemember = (req, res) =>{
    try {
        const {params: {memberId}} = req;
        const member = memberService.getOnemember(memberId);
        res.send({data: member});
    } catch (error) {
        res.status(error.status || 500).send({status: "failed", data: {error: error.message || error}});
    }
}

const addOnemember = (req, res) =>{
    const {name, gender, dateOfBirth, email, password} = req.body;
    if(
        !name ||
        !gender ||
        !dateOfBirth ||
        !email ||
        !password
    ){
        req.status(200).send({message: "All field should fillOut"});
    }
    const newMember = {
        name: name,
        gender: gender,
        dateOfBirth: dateOfBirth,
        email: email,
        password: password
    }
    try{
        const addedMember = memberService.addOnemember(newMember);
        res.status(201).send({status: "ok", data: addedMember});
        
    } catch (error) {
        res.status(error.status || 500).send({error: error});
        
    }
}

const updateMember = (req,res)=>{
    return req.data;

}

module.exports = {getAllmembers, getOnemember, addOnemember,updateMember};