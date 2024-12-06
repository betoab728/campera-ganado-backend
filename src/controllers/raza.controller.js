//controlador para la raza de los animales, metodos para listar, crear y actualizar

const pool = require('../config/db');

// Obtener todos los registros de Raza
const getRaza = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Raza');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Insertar un nuevo registro en Raza

const addRaza = async (req, res) => {
    const { nombre, descripcion } = req.body;
    if (!nombre || !descripcion) {
        return res.status(400).json({ error: 'Los campos nombre y descripción son obligatorios.' });
    }
    
    try {
        const [result] = await pool.query(
        'INSERT INTO Raza (nombre, descripcion) VALUES (?, ?)',
        [nombre, descripcion]
        );
        res.json({ id: result.insertId, nombre, descripcion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

// Editar un registro existente en Raza

const updateRaza = async (req, res) => {

    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    
    if (!id || !nombre || !descripcion) {
        return res.status(400).json({ error: 'ID, nombre y descripción son obligatorios.' });
    }
    
    try {
        const [result] = await pool.query(
        'UPDATE Raza SET nombre = ?, descripcion = ? WHERE idraza = ?',
        [nombre, descripcion, id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Raza no encontrada.' });
        }
        
        res.json({ message: 'Raza actualizada correctamente.', id, nombre, descripcion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

module.exports = { getRaza, addRaza, updateRaza };

