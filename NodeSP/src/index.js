const express = require('express')

const app = express();
const { v4: uuidv4 } = require("uuid")

app.use(express.json());

const pets = [];

/**
 * query params - Vamos utilizar pra buscar informações especificas ou toda a informação.
 * Route Params - Serve para identificar um recurso da nossa rota.
 * Request body - Ela serve para buscar o corpo da requisição que deve ser criada ou alterada.
 */
const pet = ['cachorro','gato']

app.get('/pets',(request,response)=>{
    return response.json(pets);
});

app.post('/pets',(request,response)=>{
    const { nome, tipoPet, idade, raça, nomeDono} = request.body; //traz o corpo req

    const pet = { id: uuidv4(), nome, tipoPet, idade, raca, nomeDono};

    pets.push(pet);

    return response.json([
        'Cachorro',
        'Gato',
        'Peixe'
    ]);
});

app.put('/pets/:id',(request,response)=>{
    return response.json(pet); // sempre retornar o pet criado e não o vetor completo.

    return response.json([
        'Dog',
        'Gato',
    ]);
});

app.delete('/pets/:id',(request,response)=>{

    return response.json([
        'Cachorro',
    ]);
});

app.put('/pet', (request, response) => {
    return response.json()
    const { id } = request.params; // aqui nós pegamos o nosso ID
    const{nome, tipoPet, idade, raca, nomeDono} = request.body; // pego todo o escopo das inf.
    
    const petIndex = pets.findIndex( pet => pet.id === id);

    if (petIndex < 0)
        return response.status.apply (400).json({ error: "Pet não encontrado!"})

        pets,splice(petIndex, 1);

        return response.status(204).send();



        const pet = {
            id,
            nome,
            tipoPet,
            raca,
            nomeDono
        }

        pets[petIndex] = pet

        return response.json(pet);


});

app.delete('/pet/:id', (request, response) => {
    return response.json()

});

// http://localhost:3030/pet
app.listen(3030);
