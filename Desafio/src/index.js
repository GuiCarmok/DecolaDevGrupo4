const {request,response} = require("express");
const express = require ("express"); //chamando o framework
const {v4:uuidv4} = require("uuid") // chamando a biblioteca essa biblioteca gera varios id
const app = express();
app.use(express.json()); //estamos trabalhando com varias rotas, retornando json, o node por si só nao consegue retornar em mais de uma rota o formato de json, entao essa função força o node a retonar json em todas as rotas.
const funcionarios =[];
//query params: vamos utilizar para buscar informações especificas ou toda a informação
//route params: serve para identificar um recurso na nossa rota. ex facebook, 
//request body: ele serve para burcar o corpo da requisição que dever ser criada ou alterada
app.get('/funcionario', (request,response)=>{
    return response.json(funcionarios);
});
app.post('/funcionario', (request,response)=>{
    const {nome,cpf} =request.body; //trazer requisição
    const funcionario = { id:uuidv4(),nome,cpf}; //estamso salvando esse pet dentro de pets
    funcionarios.push(funcionario); // esse push vem da variavel onde estamos criando,do nosso corpo/estamos fazendo o push dentro do nosso vetor
    return response.json(funcionario);//sempre retornar o pet criado e nao o vetor completo
});
app.put('/funcionario/:id', (request,response)=>{
    const {id} = request.params;//aqui pegamos o nosso id,de dentro dele busco as inf de dentro do body, mas somente o id{id} é o routes
    const {nome,cpf} = request.body// pego todo o escopo das inf
    const funcionarioIndex = funcionarios.findIndex(funcionario => funcionario.id ===id);//percorrendo dentro da array, indo em pet,e para cada pet, to pegando o id, esse id tem que ser igual o que esta na rota 'pet/:id
    if(funcionarioIndex < 0){
        return response.statusc(400).json ({error: "funcionario nao encontrado!"})
    }
    const funcionario ={ //depois de percorrer,  recriar ele
        id,
       cpf
    }
    //tem que jogar de volta para o vetor pets, para substituir dentro do vetor/e como se tivesse fazendo um novo push, masde um que ja existe
    funcionarios[funcionarioIndex] = funcionario
    return response.json(funcionario);//aqui sempre quero o retorno do que estou criando, nao do vetor todo
});
app.delete ('/funcionario/:id', (request,response)=>{
    const {id} = request.params;
    const funcionarioIndex = funcionarios.findIndex(funcionario => funcionario.id ===id);//percorrendo dentro da array, indo em pet,e para cada pet, to pegando o id, esse id tem que ser igual o que esta na rota 'pet/:id
    if(funcionarioIndex < 0){
        return response.statusc(400).json ({error: "funcionario nao encontrado!"})
    }
    pets.splice(funcionarioIndex,1);//indicando que vai apagar somente uma posição
    return response.status(204).send();
});
app.listen(3000);