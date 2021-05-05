
const express = require('express');

const app = express();

/**
* Métodos HTTP:
* 
* GET: Buscar informações do back-end
* POST: Criar uma informação no back-end
* PUT/PATCH: Alterar uma informação no back-end
* DELETE: Deletar informação do back-end
*/

app.get('/projects', (request, response) => {
    return response.json({ message: 'Vai Corinthians' });
});

app.listen(3333);

// VAMOS COMEÇAR COMO UMA ROTA GET PARA RETORNAR TODOS OS NOSSOS PROJETOS

app.get('/projects', (request, response) => {
	return response.json([
		'Projeto 1',
		'Projeto 2',
	]);
});

// ROTA PUT ELA GERALMENTE MUDA UM POUCO
// PENSE QUE VAMOS ALTERAR UM USUÁRIO E NÃO TODOS OS USUÁRIO, POR ISSO PASSAMOS UM PARAMETRO A MAIS
// ('/projects/:id')

app.put('/projects/:id', (request, response) => {
	return response.json([
		'Projeto 4',
		'Projeto 2',
		'Projeto 3',
	]);
});
```