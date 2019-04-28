'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    TEXT,
    DATE,
  } = app.Sequelize;

  const Authorization = app.model.define('authorization', {
    uid: {
      type: STRING,
      primaryKey: true,
    },
    user_id: {
      type: STRING,
    },
    provider: {
      type: STRING,
    },
  });

  return Authorization;
};
