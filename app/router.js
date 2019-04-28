
module.exports = app => {
  const { router, controller } = app;

  // 挂载鉴权路由
  app.passport.mount('github');

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.post('/add/news', controller.news.create);
  router.get('/news/:id', controller.news.detail);
  router.get('/test', controller.home.test);
  router.post('/post', controller.home.post);
  router.get('/login', controller.user.toLogin);
  router.post('/register', controller.user.register);
  router.get('/register', controller.user.toRegister);
  router.post('/login', controller.user.login);
  router.get('/logout', controller.user.logout);
};