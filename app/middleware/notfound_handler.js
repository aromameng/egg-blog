module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { error: 'Not Found' };
      } else {
        // ctx.body = '<h1>Page Not Found2222</h1>';
        await ctx.render('error/error.tpl',{
          status: 404,
          msg: '抱歉，你访问的页面不存在',
          pic: '/public/images/404.svg'
        })
      }
    }
  };
};