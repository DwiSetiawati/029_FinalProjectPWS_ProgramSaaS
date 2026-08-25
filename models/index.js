'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const pg = require('pg'); // <-- 1. Import modul pg secara eksplisit di sini
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (env === 'production' && config.use_env_variable) {
  // 2. Tambahkan dialectModule: pg agar Vercel tidak mencari secara dinamis
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    dialect: config.dialect,
    dialectModule: pg, 
    dialectOptions: config.dialectOptions
  });
} else if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const modelDefiner = require(path.join(__dirname, file));
    // Memastikan model didefinisikan dengan benar sebagai fungsi Sequelize
    if (typeof modelDefiner === 'function') {
      const model = modelDefiner(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;