const validateMenu = (req, res, next) => {
    const { nombre, semana } = req.body
    const errores = []

    if (nombre && typeof nombre !== 'string') {
        errores.push('El nombre debe ser un texto válido.')
    }

    if (semana && typeof semana !== 'string') {
        errores.push('La semana debe ser un texto válido.')
    }

    if (semana && !/^\d{4}-W\d{2}$/.test(semana)) {
        errores.push('La semana debe tener el formato YYYY-WNN. Ejemplo: 2026-W26.')
    }

    if (errores.length > 0) {
        return res.status(400).json({ errores })
    }

    next()
    }

    const validateMenuDia = (req, res, next) => {
    const { dia, tipoComida, recetaId } = req.body
    const errores = []

    if (dia && !['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].includes(dia)) {
        errores.push('El dia debe ser lunes, martes, miercoles, jueves, viernes, sabado o domingo.')
    }

    if (tipoComida && !['desayuno', 'almuerzo', 'merienda', 'cena'].includes(tipoComida)) {
        errores.push('El tipoComida debe ser desayuno, almuerzo, merienda o cena.')
    }

    if (recetaId && typeof recetaId !== 'number') {
        errores.push('El recetaId debe ser un número válido.')
    }

    if (errores.length > 0) {
        return res.status(400).json({ errores })
    }

    next()
}

module.exports = { validateMenu, validateMenuDia }