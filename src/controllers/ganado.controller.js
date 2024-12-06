const pool = require('../config/db');

// Obtener lista de ganado
const getGanado = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Ganado');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nuevo ganado
const addGanado = async (req, res) => {
  const { nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipo } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO Ganado (nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipo) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipo]
    );

    res.json({ id: result.insertId, nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Editar un ganado existente

const updateGanado = async (req, res) => {
  const { nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipo } = req.body;
  const { id } = req.params;

  try {
    const [result] = await pool.query(
      'UPDATE Ganado SET nombre = ?, sexo = ?, nacimiento = ?, idraza = ?, idubicacion = ?, estadoReproductivo = ?, idtipo = ? WHERE id = ?',
      [nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipo, id]
    );

    res.json({ id, nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { getGanado, addGanado, updateGanado };
