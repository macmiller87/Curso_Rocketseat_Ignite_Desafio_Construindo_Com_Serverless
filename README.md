## Projeto API Construindo Com Serverless

- Nessa aplicação foi feita uma API utilizando o Framework Serverless, que é um gerenciador de tarefas TODO, que permite criar Todos e pesquisar Todos criados.

## [Desafio 1 Módulo Chapter 6: Construindo com Serverless](https://www.notion.so/Desafio-01-Construindo-com-serverless-1fdde2c717a94f7aa077e746cb077bec)

Esse projeto foi desenvolvido com as seguintes tecnologias:

## ✨ Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Serverless Framework](serverless.com/)
- [Amazon Lambda](https://aws.amazon.com/pt/lambda/)

## 🚀 Como executar

- Clone o repositório e acesso o diretório

Rotas da aplicação

#### POST - /todos/{userid}

- Essa rota deve receber o `id` de um usuário pelo `pathParameters` (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: `title` e `deadline`, onde deadline é a data limite para o todo.

- O todo deverá ser salvo com os seguintes campos no DynamoDB:

{ 
    -	id: 'uuid', // id gerado para garantir um único todo com o mesmo id
    -	user_id: 'uuid' // id do usuário recebido no pathParameters
    -	title: 'Nome da tarefa',
    -	done: false, // inicie sempre como false
    -	deadline: new Date(deadline)
}
#### GET- /todos/{userid}

- Essa rota deve receber o `id` de um usuário pelo `pathParameters` (o mesmo id que foi usado para criar algum todo).
- A rota deve retornar os todos que possuírem o `user_id` igual ao `id` recebido pelos parâmetros.
### Para rodar localmente

- Rode `yarn` para instalar as dependências
- Rode `yarn dynamodb:install` para baixar o DynamoDB localmente
- Rode `yarn dynamo:start` para iniciar o banco de dados em ambiente local
- Rode, em outro terminal, o `yarn dev` para iniciar a aplicação em ambiente local