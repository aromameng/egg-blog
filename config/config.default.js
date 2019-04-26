exports.keys = 'koa';
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
// add middleware robot
exports.middleware = [
  'robot', 
  'notfoundHandler',
];

// robot's configurations
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};

exports.security = {
  csrf: {
    enable: false,
  },
  domainWhiteList: [ 'http://localhost:7001' ],
}

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  dialectOptions: {
    charset: 'utf8mb4',
  },
  database: 'egg_db_development',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '123456',
  timezone: '+08:00',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.alinode = {
  // 从 `Node.js 性能平台` 获取对应的接入参数
  enable: true,
  appid: '79200',
  secret: '740a6ae89b1efa5f91129e4198eef63476916078',
};

// exports.schedule = {
//   // 每 10 秒执行一次
//   interval: '20s',
// }

// 错误页面
// exports.notfound = {
//     pageUrl: '/404.html',
// }
