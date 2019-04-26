exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  dialectOptions: {
    charset: 'utf8mb4',
  },
  database: 'egg_db_test',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '123456',
  timezone: '+08:00',
};