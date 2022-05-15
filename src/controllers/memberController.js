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
    res.send("hi");
}

const getOnemember = (req, res) =>{
    res.send("hellow");
}


module.exports = {getAllmembers, getOnemember};