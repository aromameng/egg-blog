const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const res = await ctx.service.news.index({
      offset: 0
    });
    await ctx.render('news/list.tpl', { list: res.data.rows });
  }
  async create(){
    const {
      ctx,
    } = this;
    const created = await ctx.service.news.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = created;
  }
}

module.exports = NewsController;

