const express = require ('express');
const db = require ("./app/models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.json({message: "Avanade Crud"});
});

db.sequelize.sync();

require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
