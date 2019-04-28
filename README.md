# egg-blog

#### 数据库
- 创建数据库
```
mysql -u root -p -e 'CREATE DATABASE IF NOT EXISTS `egg_db_development`;'
```
- 在项目根目录下新建一个 .sequelizerc 配置文件：
```
'use strict';

const path = require('path');

module.exports = {
  config: path.join(__dirname, 'database/config.json'),
  'migrations-path': path.join(__dirname, 'database/migrations'),
  'seeders-path': path.join(__dirname, 'database/seeders'),
  'models-path': path.join(__dirname, 'app/model'),
};
```
- 初始化 Migrations 配置文件和目录
```
npx sequelize init:config
npx sequelize init:migrations
```
- 修改 database/config.json 文件
- 创建users 和 blogs表格
```
npx sequelize migration:generate --name=init-users
npx sequelize migration:generate --name=init-blogs
```
- 执行 migrate 进行数据库变更
```
# 升级数据库
npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
# npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
# npx sequelize db:migrate:undo:all
```
##### redis 安装
https://github.com/MicrosoftArchive/redis/releases 

### 运行
```
# 开发
npm run dev

# 生产环境
npm run start
# 停止服务
npm run stop
```

### 参考文档
- [egg中文教程](https://eggjs.org/zh-cn/tutorials/index.html)
- [nunjucks官方文档](https://mozilla.github.io/nunjucks/cn/getting-started.html)
- [Sequelize](http://docs.sequelizejs.com)
- [Sequelize Docs 中文版](https://demopark.github.io/sequelize-docs-Zh-CN/)