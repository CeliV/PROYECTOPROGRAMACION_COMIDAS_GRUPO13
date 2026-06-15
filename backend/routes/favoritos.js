const { Router } = require('express')
const {
    getFavoritos,
    agregarFavorito,
    eliminarFavorito
} = require('../controllers/favoritoController')
const { verificarToken } = require('../middleware/auth')

const router = Router()

router.get('/', verificarToken, getFavoritos)
router.post('/', verificarToken, agregarFavorito)
router.delete('/:recetaId', verificarToken, eliminarFavorito)

module.exports = router