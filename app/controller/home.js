const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = 'Hello world';
    await this.ctx.render('home/home.tpl');
  }
  async test() {
    this.ctx.body = {
      code: 0,
      data: this.ctx.query
    }
  }
  async post() {
    this.ctx.body = {
      code: 0,
      data: this.ctx.request.body
    }
  }
}



module.exports = HomeController;