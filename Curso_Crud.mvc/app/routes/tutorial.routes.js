module.exports = app => {
    const livros = require ("../controllers/livro.controller");

    var router = require ("express").Router();

    //Cria Novo tutorial
    router.post("/", livros.create);
    //Retorna todos os tutoriais
    router.get("/", livros.findAll);
    //Retorna os tutoriais publicados
    router.get("/published", livros.findAllPublished);
    //Retorna um tutorial com id específico
    router.get("/:id", livros.findOne);
    //Atualiza tutorial
    router.put("/:id", livros.update);

    //deleta  todos os tutoriais
    router.delete("/", livros.deleteAll);



    app.use('/api/tutorials', router)
}
