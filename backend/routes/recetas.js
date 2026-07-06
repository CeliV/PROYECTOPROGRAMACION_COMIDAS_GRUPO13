const { Router } = require('express')
const {
    getRecetas,
    getRecetaById,
    crearReceta,
    actualizarReceta,
    eliminarReceta
} = require('../controllers/recetaController')
const { verificarToken } = require('../middleware/auth')
const { validateReceta } = require('../middleware/validators/recetaValidator')

const router = Router()

router.get('/', verificarToken, getRecetas)
router.get('/:id', verificarToken, getRecetaById)
router.post('/', verificarToken, validateReceta, crearReceta)
router.put('/:id', verificarToken, validateReceta, actualizarReceta)
router.delete('/:id', verificarToken, eliminarReceta)

module.exports = router