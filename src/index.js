const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

const v1Router = require("./v1/routes");

app.use("/api/v1",v1Router);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});