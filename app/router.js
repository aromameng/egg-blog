
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.post('/add/news', controller.news.create);
  router.get('/news/:id', controller.news.detail);
  router.get('/test', controller.home.test);
  router.post('/post', controller.home.post);
};