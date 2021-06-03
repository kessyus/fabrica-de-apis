const { saveData, getData } = require('../utils/manipulate.json');

const includePost = (req, res, _) => {
  // get existing data
  const data = getData('posts');

  // get the new category
  const { imagem, titulo, autor, dataPostagem, descricao, categoriaId } =
    req.body;

  // check if 'posts' is empty
  if (
    !imagem ||
    !titulo ||
    !autor ||
    !dataPostagem ||
    !descricao ||
    !categoriaId
  ) {
    res.status(400).send({
      error: true,
      message:
        'Nenhum dos campos "imagem, titulo, autor, dataPostagem, descricao ou categoriaId" não pode ser vazio.'
    });
    return -1;
  }

  // check if post already exists
  const alreadyExist = data.find((item) => item.titulo === titulo);

  if (alreadyExist) {
    res.status(409).send({
      error: true,
      message: 'Um post com o mesmo "titulo" já existe na base.'
    });
    return -1;
  }

  // save/append new post
  data.push({
    id: Number(data[data.length - 1].id) + 1,
    imagem,
    titulo,
    autor,
    dataPostagem,
    descricao,
    categoriaId
  });

  console.log(data);
  saveData(data, 'posts');

  res.status(200).send({
    success: true,
    message: 'post cadastrado com sucesso.'
  });
  return 0;
};

const deletePostById = (req, res, _) => {
  // get id from HTTP DELETE URL
  const postId = req.params.id;

  // get existing data
  const data = getData('posts');

  // filter data without postId
  const filteredData = data.filter(
    (item) => Number(item.id) !== Number(postId)
  );

  if (data.length === filteredData.length) {
    res.status(409).send({
      error: true,
      message: 'id não existe.'
    });
    return -1;
  }

  // save filtered data without the informed postId
  saveData(filteredData, 'posts');

  res.status(200).send({
    success: true,
    message: 'id excluído com sucesso.'
  });
  return 0;
};

const listPostById = (req, res, _) => {
  // get id from HTTP GET URL
  const postId = req.params.id;

  // get existing data
  const data = getData('posts');

  // check if ID exists
  const existID = data.find((item) => Number(item.id) === Number(postId));

  if (!existID) {
    res.status(409).send({
      error: true,
      message: 'id não encontrado.'
    });
    return -1;
  }

  res.status(200).send({
    success: true,
    detalhes: existID
  });
  return 0;
};

const listAllPosts = (req, res, _) => {
  res.send(getData('posts'));
};

const listAllPostsByCategory = (req, res, _) => {
  // get id from HTTP GET URL
  const categoryId = req.params.id;

  // get existing data
  const data = getData('posts');

  // filter data without postId
  const filteredData = data.filter(
    (item) => Number(item.categoriaId) === Number(categoryId)
  );

  if (!filteredData) {
    res.status(409).send({
      error: true,
      message: 'Não existem posts para o id de categoria informado.'
    });
    return -1;
  }

  res.status(200).send({
    success: true,
    detalhes: filteredData
  });
  return 0;
};

module.exports = {
  includePost,
  deletePostById,
  listPostById,
  listAllPosts,
  listAllPostsByCategory
};
