module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();

    if (ctx.status > 400 && ctx.status <= 500 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { error: 'Not Found' };
      } else {
        let pic = '/public/images/404.svg'
        let tip = '抱歉，你访问的页面不存在'
        switch(ctx.status){
          case 403:
            pic = '/public/images/403.svg'
            tip = '抱歉，你无权访问此页面'
            break;
          case 500:
            pic = '/public/images/500.svg'
            tip = '抱歉，服务器出错了'
            break;
          default:
        }

        await ctx.render('error/error.tpl',{
          status: ctx.status,
          msg: tip,
          pic: pic
        })
      }
    }
  };
};