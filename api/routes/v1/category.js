// import controller
const categoryController = require('../../controllers/category.controller');

module.exports = (router) => {
  router
    .route('/categoria')
    .get(categoryController.listAllCategories)
    .post(categoryController.includeCategory);

  router
    .route('/categoria/:id')
    .get(categoryController.listCategoryById)
    .delete(categoryController.deleteCategoryById);
};
