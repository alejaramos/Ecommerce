const Sequelize = require('sequelize');

const db = new Sequelize('bierfass', null, null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  port: 5432,
  //este puerto es distinto porque en mi computador corre en un puerto diferente postgrest. el de ustedes deberia ser 5432, creo
});

module.exports = db;
