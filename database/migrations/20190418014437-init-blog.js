'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 blogs 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('blogs', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(100),
      summary: STRING(250),
      content: TEXT,
      readSize: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },
   // 在执行数据库降级时调用的函数，删除 blogs 表
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blogs');
  }
};
