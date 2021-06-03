const { saveData, getData } = require('../utils/manipulate.json');

const includeCategory = (req, res, _) => {
  // get existing data
  const data = getData('categories');

  // get the new category
  const { categoria } = req.body;

  // check if 'categoria' is empty
  if (!categoria) {
    res.status(400).send({
      error: true,
      message: '"categoria" não pode ser vazio.'
    });
    return -1;
  }

  // check if category already exists
  const alreadyExist = data.find((item) => item.descricao === categoria);

  if (alreadyExist) {
    res.status(409).send({
      error: true,
      message: '"categoria" já existe na base.'
    });
    return -1;
  }

  // save/append new category
  data.push({
    id: Number(data[data.length - 1].id) + 1,
    descricao: categoria
  });

  saveData(data, 'categories');

  res.status(200).send({
    success: true,
    message: 'categoria cadastrada com sucesso.'
  });
  return 0;
};

const deleteCategoryById = (req, res, _) => {
  // get id from HTTP DELETE URL
  const categoryId = req.params.id;

  // get existing data
  const data = getData('categories');

  // filter data without categoryId
  const filteredData = data.filter(
    (item) => Number(item.id) !== Number(categoryId)
  );

  if (data.length === filteredData.length) {
    res.status(409).send({
      error: true,
      message: 'id não existe.'
    });
    return -1;
  }

  // save filtered data without the informed categoryId
  saveData(filteredData, 'categories');

  res.status(200).send({
    success: true,
    message: 'id excluído com sucesso.'
  });
  return 0;
};

const listCategoryById = (req, res, _) => {
  // get id from HTTP GET URL
  const categoryId = req.params.id;

  // get existing data
  const data = getData('categories');

  // check if ID exists
  const existID = data.find((item) => Number(item.id) === Number(categoryId));

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

const listAllCategories = (req, res, _) => {
  res.send(getData('categories'));
};

module.exports = {
  includeCategory,
  deleteCategoryById,
  listCategoryById,
  listAllCategories
};
