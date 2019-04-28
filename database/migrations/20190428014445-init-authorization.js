'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('authorizations', { id: Sequelize.INTEGER });
    */
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('authorizations', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      uid: { type: STRING(50)},
      user_id: STRING(50),
      provider: STRING(50),
    });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('authorizations');
    */
    await queryInterface.dropTable('authorizations');
  }
};
