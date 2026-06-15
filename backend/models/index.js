const { Sequelize } = require('sequelize')
const config = require('../config/database')

const env = process.env.NODE_ENV || 'development'
const dbConfig = config[env]

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool,
    dialectOptions: dbConfig.dialectOptions
  }
)

// modelos
const UserModel = require('./User')
const RecetaModel = require('./Receta')
const IngredienteModel = require('./Ingrediente')
const FavoritoModel = require('./Favorito')
const MenuSemanalModel = require('./MenuSemanal')
const MenuDiaModel = require('./MenuDia')

const User = UserModel(sequelize)
const Receta = RecetaModel(sequelize)
const Ingrediente = IngredienteModel(sequelize)
const Favorito = FavoritoModel(sequelize)
const MenuSemanal = MenuSemanalModel(sequelize)
const MenuDia = MenuDiaModel(sequelize)

//asociaciones

// User tiene muchas Recetas
User.hasMany(Receta, { foreignKey: 'userId' })
Receta.belongsTo(User, { foreignKey: 'userId' })

// Receta tiene muchos Ingredientes
Receta.hasMany(Ingrediente, { foreignKey: 'recetaId' })
Ingrediente.belongsTo(Receta, { foreignKey: 'recetaId' })

// User tiene muchos Favoritos
User.hasMany(Favorito, { foreignKey: 'userId' })
Favorito.belongsTo(User, { foreignKey: 'userId' })

// Receta tiene muchos Favoritos
Receta.hasMany(Favorito, { foreignKey: 'recetaId' })
Favorito.belongsTo(Receta, { foreignKey: 'recetaId' })

// User tiene muchos MenusSemanales
User.hasMany(MenuSemanal, { foreignKey: 'userId' })
MenuSemanal.belongsTo(User, { foreignKey: 'userId' })

// MenuSemanal tiene muchos MenuDias
MenuSemanal.hasMany(MenuDia, { foreignKey: 'menuSemanalId' })
MenuDia.belongsTo(MenuSemanal, { foreignKey: 'menuSemanalId' })

// Receta tiene muchos MenuDias
Receta.hasMany(MenuDia, { foreignKey: 'recetaId' })
MenuDia.belongsTo(Receta, { foreignKey: 'recetaId' })

module.exports = {
  sequelize,
  Sequelize,
  User,
  Receta,
  Ingrediente,
  Favorito,
  MenuSemanal,
  MenuDia
}