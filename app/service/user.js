const Service = require('egg').Service;
const md5 = require('js-md5')
const {
  ERROR,
  SUCCESS
} = require('../util/util');
class UserService extends Service {
  async register(info) {
    const {
      ctx,
    } = this;
    try {
      const { username } = info
      const userInfo = await this.ctx.model.User.findOne({
        where: {
          username: username
        },
      })
      if(userInfo){
        return Object.assign(ERROR, {
          msg: '用户名已经存在',
        });
      }
      const res = await this.ctx.model.User.create(info);
      return Object.assign({
        data: Object.assign(res, {
          password: '',
        }),
      }, SUCCESS);
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }

  async login(info){
    const { username } = info
    const userInfo = await this.ctx.model.User.findOne({
      where: {
        username: username.toString()
      },
    })
    if(!userInfo){
      return Object.assign(ERROR, {
        msg: '用户名不存在',
      });
    }
    if(info.password == userInfo.password){
      this.ctx.session.user = userInfo
      return Object.assign(SUCCESS, {
        data: Object.assign(userInfo, {
          password: '',
        }),
      });
    }
    return Object.assign(ERROR, {
      msg: '用户名或密码错误',
    });
  }
}

module.exports = UserService;