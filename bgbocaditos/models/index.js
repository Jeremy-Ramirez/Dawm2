const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categoria = require("./categoria.model.js")(sequelize, Sequelize);
db.productos = require("./productos.model.js")(sequelize, Sequelize);
//db.detalle = require("./detalle.model.js")(sequelize, Sequelize);

//db.categoria.hasMany(db.productos, { as: "productos" });


/*db.productos.belongsTo(db.categoria, {
  foreignKey: "idProducto",
  as: "producto",
});*/

//db.categoria.hasMany(db.productos, { as: "productos" });


db.productos.belongsTo(db.categoria, {
  foreignKey: "idCategoria",
  as: "categoria",
});

module.exports = db;