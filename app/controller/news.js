const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
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
  async detail(){
    const ctx = this.ctx;
    const id = toInt(ctx.params.id)
    let res = await ctx.service.news.getNewDetail(id);
    if(!res){
      return
    }
    await ctx.render('news/detail.tpl', { info: res.data });
  }
}

module.exports = NewsController;

