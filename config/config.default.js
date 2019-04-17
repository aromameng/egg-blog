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
  'robot'
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
  database: 'egg_db2',
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

// exports.schedule = {
//   // 每 10 秒执行一次
//   interval: '20s',
// }