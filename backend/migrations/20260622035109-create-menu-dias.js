'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menu_dias', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dia: {
        type: Sequelize.ENUM(
          'lunes',
          'martes',
          'miercoles',
          'jueves',
          'viernes',
          'sabado',
          'domingo'
        ),
        allowNull: false
      },
      tipoComida: {
        type: Sequelize.ENUM(
          'desayuno',
          'almuerzo',
          'merienda',
          'cena'
        ),
        allowNull: false
      },
      menuSemanalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'menus_semanales',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      recetaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'recetas',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('menu_dias')
  }
}
