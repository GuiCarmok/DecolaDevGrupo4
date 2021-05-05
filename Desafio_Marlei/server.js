const express = require('express');
const app = express();
const db = require("./app/models");



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({message:"desafio Digital House"});
});

db.sequelize.sync();
require("./app/routes/livro.routes")(app);



const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Servido rodando na porta: ${PORT}`);
});
