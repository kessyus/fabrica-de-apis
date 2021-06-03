// import controller
const postController = require('../../controllers/post.controller');

module.exports = (router) => {
  router
    .route('/post')
    .get(postController.listAllPosts)
    .post(postController.includePost);

  router
    .route('/post/:id')
    .get(postController.listPostById)
    .delete(postController.deletePostById);

  router
    .route('/post/categoria/:id')
    .get(postController.listAllPostsByCategory);
};
