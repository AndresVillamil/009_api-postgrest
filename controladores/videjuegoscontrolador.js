const { pool } = require('../configuracion/baseDatos');



const obtenerTodosLosVideojuegos = async (req, res, next) => {
    try {
        const consulta = 'SELECT * FROM videojuegos ORDER BY id ASC';
        const resultados = await pool.query(consulta);

        res.json({
            exito: true,
            mensaje: 'Videojuegos obtenidos exitosamente',
            data: resultados.rows,
            total: resultados.rowCount
        });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({
            exito: false,
            mensaje: 'Error al obtener videojuegos',
            error: error.message

        });
    }

};

const obtenerVideojuegoPorId = async (req, res, next) => {
    const { id } = req.params;
    try {
        const consulta = 'SELECT * FROM videojuegos WHERE id = $1';
        const resultados = await pool.query(consulta, [id]);
        if (resultados.rowCount === 0) {
            return res.status(404).json({
                exito: false,
                mensaje: 'Videojuego no encontrado'
            });
        }
        res.json({
            exito: true,
            mensaje: 'Videojuego obtenido exitosamente',
            data: resultados.rows[0]
        });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({
            exito: false,
            mensaje: 'Error al obtener videojuegos',
            error: error.message

        });
    }

};

const crearVideojuego = async (req, res, next) => {

    try {
        const { nombre, genero, plataforma, precio, fecha_lanzamiento, desarrollador,
            descripcion } = req.body;

        if (isNaN(precio)) {
            return res.status(400).json({
                exito: false,
                mensaje: 'El precio debe ser numérico'
            });
        }
        if (!nombre || !genero || !plataforma || !precio) {
            return res.status(400).json({
                exito: false,
                mensaje: 'Todos los campos nombre, genero, plataforma y precio son obligatorios'
            });
        }

        const consulta = `INSERT INTO videojuegos (nombre, genero, plataforma, precio, fecha_lanzamiento, desarrollador, descripcion) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        const valores = [nombre, genero, plataforma, precio, fecha_lanzamiento, desarrollador, descripcion];
        const resultados = await pool.query(consulta, valores);

        res.status(201).json({
            exito: true,
            mensaje: 'Videojuego creado exitosamente',
            data: resultados.rows[0]
        });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({
            exito: false,
            mensaje: 'Error al crear videojuego',
            error: error.message
        });
    }

};

const actualizarVideojuego = async (req, res, next) => {
    // Implementar lógica para actualizar un videojuego
    try {
        const { id } = req.params;
        const { nombre, genero, plataforma, precio, fecha_lanzamiento, desarrollador, descripcion } = req.body;

        if (!nombre || !genero || !plataforma || !precio) {
            return res.status(400).json({
                exito: false,
                mensaje: 'Todos los campos nombre, genero, plataforma y precio son obligatorios'
            });
        }

        const consulta = `UPDATE videojuegos SET nombre = $1, genero = $2, plataforma = $3, precio = $4, fecha_lanzamiento = $5, 
        desarrollador = $6, descripcion = $7 WHERE id = $8 RETURNING *`;
        const valores = [nombre, genero, plataforma, precio, fecha_lanzamiento, desarrollador, descripcion, id];
        const resultados = await pool.query(consulta, valores);
        if (resultados.rowCount === 0) {
            return res.status(404).json({
                exito: false,
                mensaje: 'Videojuego no encontrado'
            });
        } res.status(201).json({
            exito: true,
            mensaje: 'Videojuego actualizado exitosamente',
            data: resultados.rows[0]
        });


    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({
            exito: false,
            mensaje: 'Error al actualizar videojuego',
            error: error.message
        });
    }
};

const eliminarVideojuego = async (req, res, next) => {
    // Implementar lógica para eliminar un videojuego
    try {
        const { id } = req.params;
        const consulta = 'DELETE FROM videojuegos WHERE id = $1 RETURNING *';
        const resultados = await pool.query(consulta, [id]);
        if (resultados.rowCount === 0) {
            return res.status(404).json({
                exito: false,
                mensaje: 'Videojuego no encontrado'
            });
        }
        res.json({
            exito: true,
            mensaje: 'Videojuego eliminado exitosamente',
            data: resultados.rows[0]
        });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({
            exito: false,
            mensaje: 'Error al eliminar videojuego',
            error: error.message
        });
    }
};



module.exports = {
    obtenerTodosLosVideojuegos,
    obtenerVideojuegoPorId,
    crearVideojuego,
    actualizarVideojuego,
    eliminarVideojuego
};