'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    TEXT,
    DATE,
  } = app.Sequelize;

  const News = app.model.define('blog', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      validate: {
        min: 2,
        max: 50,
      },
    },
    summary: {
      type: STRING,
      validate: {
        min: 2,
        max: 255,
      },
    },
    content: {
      type: TEXT,
    },
    readSize: {
      type: INTEGER,
      defaultValue: 0,
    },
    created_at: DATE,
    updated_at: DATE,
  });

  // News.associate = function() {
  //   app.model.News.belongsTo(app.model.User);
  //   app.model.News.belongsTo(app.model.Catalog);
  //   app.model.News.hasMany(app.model.Comment, {
  //     as: 'comment',
  //   });
  // };
  return News;
};
