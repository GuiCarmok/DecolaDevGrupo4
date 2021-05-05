const express = require('express');
const cors = require ('cors');
const db = require ("./app/models");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
//Parse Requets ApplicationJson
app.use(express.json());
//UrlEnconded
app.use(express.urlencoded({extended:true}));

//RotaTeste
app.get("/", (req, res) => {
    res.json({message: "Seja bem vindo a decola dev avanade"})
})
db.sequelize.sync();


require("./app/routes/tutorial.routes")(app);

//Set Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server tá rodando na porta: ${PORT}`)
})
