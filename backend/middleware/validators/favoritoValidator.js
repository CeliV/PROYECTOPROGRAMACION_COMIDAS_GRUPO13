const validateFavorito = (req, res, next) => {
    const { recetaId } = req.body
    const errores = []

    if (recetaId && typeof recetaId !== 'number') {
        errores.push('El recetaId debe ser un número válido.')
    }

    if (recetaId && recetaId <= 0) {
        errores.push('El recetaId debe ser mayor a cero.')
    }

    if (errores.length > 0) {
        return res.status(400).json({ errores })
    }

    next()
}

module.exports = { validateFavorito }