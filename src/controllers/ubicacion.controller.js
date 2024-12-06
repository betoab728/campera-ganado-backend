const pool = require('../config/db');

// Obtener lista de ubicaciones
const getUbicaciones = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM ubicacion');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Registrar una nueva ubicación
const createUbicacion = async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ message: 'El campo nombre es obligatorio' });
    }

    const [result] = await pool.query('INSERT INTO ubicacion (nombre) VALUES (?)', [nombre]);
    res.status(201).json({ message: 'Ubicación registrada con éxito', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Editar una ubicación existente
const updateUbicacion = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ message: 'El campo nombre es obligatorio' });
    }

    const [result] = await pool.query('UPDATE ubicacion SET nombre = ? WHERE id = ?', [nombre, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ubicación no encontrada' });
    }

    res.status(200).json({ message: 'Ubicación actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUbicaciones,
  createUbicacion,
  updateUbicacion,
};
