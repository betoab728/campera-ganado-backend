const pool = require('../config/db');

// Obtener todos los registros de TipoGanado
const getTipoGanado = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM TipoGanado');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Insertar un nuevo registro en TipoGanado
const addTipoGanado = async (req, res) => {
  const { nombre, descripcion } = req.body;
  if (!nombre || !descripcion) {
    return res.status(400).json({ error: 'Los campos nombre y descripción son obligatorios.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO TipoGanado (nombre, descripcion) VALUES (?, ?)',
      [nombre, descripcion]
    );
    res.json({ id: result.insertId, nombre, descripcion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Editar un registro existente en TipoGanado
const updateTipoGanado = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;

  if (!id || !nombre || !descripcion) {
    return res.status(400).json({ error: 'ID, nombre y descripción son obligatorios.' });
  }

  try {
    const [result] = await pool.query(
      'UPDATE TipoGanado SET nombre = ?, descripcion = ? WHERE idtipo = ?',
      [nombre, descripcion, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'TipoGanado no encontrado.' });
    }

    res.json({ message: 'TipoGanado actualizado correctamente.', id, nombre, descripcion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTipoGanado, addTipoGanado, updateTipoGanado };
