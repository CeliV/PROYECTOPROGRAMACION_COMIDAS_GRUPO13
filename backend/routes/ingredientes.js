const { Router } = require('express')
const {
    agregarIngrediente,
    eliminarIngrediente
} = require('../controllers/ingredienteController')
const { verificarToken } = require('../middleware/auth')
const { validateIngrediente } = require('../middleware/validators/ingredienteValidator')

const router = Router({ mergeParams: true })

router.post('/', verificarToken, validateIngrediente, agregarIngrediente)
router.delete('/:id', verificarToken, eliminarIngrediente)

module.exports = router