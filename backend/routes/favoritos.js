const { Router } = require('express')
const {
    getFavoritos,
    agregarFavorito,
    eliminarFavorito
} = require('../controllers/favoritoController')
const { verificarToken } = require('../middleware/auth')
const { validateFavorito } = require('../middleware/validators/favoritoValidator')

const router = Router()

router.get('/', verificarToken, getFavoritos)
router.post('/', verificarToken, validateFavorito, agregarFavorito)
router.delete('/:recetaId', verificarToken, eliminarFavorito)

module.exports = router