'use strict'

module.exports = {
  up: async (queryInterface) => {
    // insertar usuario de prueba
    await queryInterface.bulkInsert('users', [{
      nombre: 'Usuario Demo',
      email: 'demo@test.com',
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.', // password: "password"
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    // insertar recetas de prueba
    await queryInterface.bulkInsert('recetas', [
      {
        titulo: 'Tostadas con manteca',
        descripcion: 'Desayuno rápido y rico',
        tipo: 'desayuno',
        instrucciones: 'Tostar el pan y agregar manteca al gusto',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Ensalada mixta',
        descripcion: 'Almuerzo liviano y fresco',
        tipo: 'almuerzo',
        instrucciones: 'Mezclar lechuga, tomate y zanahoria. Agregar aceite y limón',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Yogur con frutas',
        descripcion: 'Merienda saludable',
        tipo: 'merienda',
        instrucciones: 'Servir el yogur y agregar frutas cortadas',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Milanesas con puré',
        descripcion: 'Cena clásica argentina',
        tipo: 'cena',
        instrucciones: 'Pasar las milanesas por huevo y pan rallado. Freír y servir con puré',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    // insertar ingredientes de prueba
    await queryInterface.bulkInsert('ingredientes', [
      { nombre: 'Pan', cantidad: 2, unidad: 'rebanadas', recetaId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Manteca', cantidad: 1, unidad: 'cucharada', recetaId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Lechuga', cantidad: 100, unidad: 'gramos', recetaId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Tomate', cantidad: 1, unidad: 'unidad', recetaId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Yogur', cantidad: 200, unidad: 'gramos', recetaId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Frutas', cantidad: 1, unidad: 'taza', recetaId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Carne', cantidad: 200, unidad: 'gramos', recetaId: 4, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Papa', cantidad: 3, unidad: 'unidades', recetaId: 4, createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ingredientes', null, {})
    await queryInterface.bulkDelete('recetas', null, {})
    await queryInterface.bulkDelete('users', null, {})
  }
}