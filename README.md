# API Backend

## Propósito

Essa API de backend foi desenvolvida com o intuito de ajudar os alunos do Bootcamp de Frontend do Infnet para criação de um blog. Os requisitos solicitados foram:

A proposta inicial é criar uma api com algumas rotas:
- incluir uma categoria
- excluir uma categoria por id
- obter uma categoria por id
- obter uma lista de categorias
- incluir um post
- excluir um post por id
- obter um post por id
- obter uma lista de posts por categoria

Os campos da categoria e do post são os seguintes:
#categoria: id, descricao	
#post: id, imagem, título, autor, data, descricao, categoria-id

O objetivo é manipular um arquivo JSON (consultar e alterar) e retorná-lo ao cliente.

## Orientações Gerais

Na pasta 'docs' vocês encontrarão um arquivo com uma collection do Postman com todas as rotas funcionando e com orientações de como adicionar, excluir, listar as categorias e posts.

Tomei a liberdade de escolher a porta 4000 pois ela é pouco utilizada e não conflitará com as portas padrões utilizadas pelo React.

A pasta models tem dois arquivos json que guardam as informações dos posts e categorias simulando um 'banco de dados'. Inclui alguns dados simulando informações de um blog de filmes mas usando as rotas ou editando os próprios JSONs vocês conseguirão mudar o tema do backend.

## Iniciar o servidor

Para baixar os códigos e instalar as libs basta você rodar os comandos abaixo no seu terminal de comando. 

```console
$ cd ~/
$ git clone https://github.com/kessyus/fabrica-de-apis.git
$ cd fabrica-de-apis
$ yarn
```

Depois que fizer os passos acima, basta rodar o comando abaixo estando dentro da pasta 'fabrica-de-apis' que o servidor estará rodando no seu computador.

```console
$ yarn start
```

Forte abraço! Kessyus 😉