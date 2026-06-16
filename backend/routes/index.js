const { Router } = require('express')
const authRoutes = require('./auth')
const recetaRoutes = require('./recetas')
const ingredienteRoutes = require('./ingredientes')
const favoritoRoutes = require('./favoritos')
const menuRoutes = require('./menu')

const router = Router()


router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' })
})

// rutas de autenticacion
router.use('/auth', authRoutes)

// rutas de la app
router.use('/recetas', recetaRoutes)
router.use('/recetas/:id/ingredientes', ingredienteRoutes)
router.use('/ingredientes', ingredienteRoutes)
router.use('/favoritos', favoritoRoutes)
router.use('/menu', menuRoutes)

module.exports = router