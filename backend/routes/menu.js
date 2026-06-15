const { Router } = require('express')
const {
    getMenu,
    crearMenu,
    agregarDia,
    eliminarDia
} = require('../controllers/menuController')
const { verificarToken } = require('../middleware/auth')

const router = Router()

router.get('/', verificarToken, getMenu)
router.post('/', verificarToken, crearMenu)
router.post('/:id/dias', verificarToken, agregarDia)
router.delete('/:id/dias/:diaId', verificarToken, eliminarDia)

module.exports = router