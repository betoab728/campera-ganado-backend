//controller para la dieta con los campos: iddieta, nombre, descripcion,idtipoganado,fecha

const pool = require('../config/db');

// Obtener lista de dietas
const getDietas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM dieta');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nueva dieta
const addDieta = async (req, res) => {
  const { nombre, descripcion, idtipoganado, fecha } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO dieta (nombre, descripcion, idtipoganado, fecha) VALUES (?, ?, ?, ?)',
      [nombre, descripcion, idtipoganado, fecha]
    );

    res.json({ id: result.insertId, nombre, descripcion, idtipoganado, fecha });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};  

// Editar una dieta existente
const updateDieta = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, idtipoganado, fecha } = req.body;

    if (!nombre || !descripcion || !idtipoganado || !fecha) {
      return res.status(400).json({ message: 'Los campos nombre, descripcion, idtipoganado y fecha son obligatorios' });
    }

    const [result] = await pool.query('UPDATE dieta SET nombre = ?, descripcion = ?, idtipoganado = ?, fecha = ? WHERE iddieta = ?', [nombre, descripcion, idtipoganado, fecha, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Dieta no encontrada' });
    }

    res.status(200).json({ message: 'Dieta actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getDietas, addDieta, updateDieta };