const Service = require('egg').Service;
const {
  ERROR,
  SUCCESS
} = require('../util/util');
class NewsService extends Service {
  async create(info) {
    const {
      ctx,
    } = this;
    try {
      const res = await this.ctx.model.News.create(info);
      return Object.assign({
        data: res,
      }, SUCCESS);
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }

  async index({
    offset = 0,
    limit = 5,
    order_by = 'created_at',
    order = 'DESC'
  }) {
    const options = {
      offset: parseInt(offset),
      limit: parseInt(limit),
      order: [
        [ order_by, order.toUpperCase() ],
      ],
    };
    console.log('=====', options)
    const res = await this.ctx.model.News.findAndCountAll(options);
    return Object.assign(SUCCESS, {
      data: res,
    });
  }
  async getContent() {
    return {content: 'content11',}
  }
}

module.exports = NewsService;