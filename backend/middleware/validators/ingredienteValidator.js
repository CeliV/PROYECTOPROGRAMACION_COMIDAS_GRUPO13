const validateIngrediente = (req, res, next) => {
    const { nombre, cantidad, unidad } = req.body
    const errores = []

    if (nombre && typeof nombre !== 'string') {
        errores.push('El nombre debe ser un texto válido.')
    }

    if (cantidad && typeof cantidad !== 'number') {
        errores.push('La cantidad debe ser un número válido.')
    }

    if (cantidad && cantidad <= 0) {
        errores.push('La cantidad debe ser mayor a cero.')
    }

    if (unidad && typeof unidad !== 'string') {
        errores.push('La unidad debe ser un texto válido.')
    }

    if (errores.length > 0) {
        return res.status(400).json({ errores })
    }

    next()
}

module.exports = { validateIngrediente }