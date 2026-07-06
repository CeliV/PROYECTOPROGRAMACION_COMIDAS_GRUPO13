const { Router } = require('express')
const {
    getMenu,
    crearMenu,
    agregarDia,
    eliminarDia
} = require('../controllers/menuController')
const { verificarToken } = require('../middleware/auth')
const { validateMenu, validateMenuDia } = require('../middleware/validators/menuValidator')

const router = Router()

router.get('/', verificarToken, getMenu)
router.post('/', verificarToken, validateMenu, crearMenu)
router.post('/:id/dias', verificarToken, validateMenuDia, agregarDia)
router.delete('/:id/dias/:diaId', verificarToken, eliminarDia)

module.exports = router