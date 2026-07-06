const validateReceta = (req, res, next) => {
    const { titulo, tipo, descripcion, instrucciones } = req.body
    const errores = []

    if (titulo && typeof titulo !== 'string') {
        errores.push('El titulo debe ser un texto válido.')
    }

    if (tipo && !['desayuno', 'almuerzo', 'merienda', 'cena'].includes(tipo)) {
        errores.push('El tipo debe ser desayuno, almuerzo, merienda o cena.')
    }

    if (descripcion && typeof descripcion !== 'string') {
        errores.push('La descripcion debe ser un texto válido.')
    }

    if (instrucciones && typeof instrucciones !== 'string') {
        errores.push('Las instrucciones deben ser un texto válido.')
    }

    if (errores.length > 0) {
        return res.status(400).json({ errores })
    }

    next()
}

module.exports = { validateReceta }