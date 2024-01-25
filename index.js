const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.json("Esta Funcionando!")
});

app.listen(3000, function() {
    console.log('Servidor funcionando!')
});