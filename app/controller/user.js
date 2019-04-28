const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
class UserController extends Controller {
  async create(){
    const {
      ctx,
    } = this;
    const created = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = created;
  }
  async logout() {
    const ctx = this.ctx;
    this.ctx.session = null
    ctx.logout();
    ctx.redirect('/');
  }
  async toLogin(){
    await this.ctx.render('user/login.tpl');
  }
  async login(){
    const userInfo = this.ctx.request.body
    this.ctx.body = await this.ctx.service.user.login(userInfo)
  }
  async toRegister(){
    await this.ctx.render('user/register.tpl');
  }
  async register(){
    const userInfo = this.ctx.request.body
    const user = Object.assign(userInfo, {
      photo: ''
    })
    this.ctx.body = await this.ctx.service.user.register(user);
  }
}

module.exports = UserController;