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
  const { nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipoganado } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO Ganado (nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipoganado) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipoganado]
    );

    res.json({ id: result.insertId, nombre, sexo, nacimiento, idraza, idubicacion, estadoReproductivo, idtipoganado });
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

// Obtener detalles de un animal por su ID
const getAnimalDetails = async (req, res) => {
  const { id } = req.params; // Obtener el ID del animal desde los parámetros de la solicitud

  try {
    // Llamar al procedimiento almacenado
    const [rows] = await pool.query('CALL ObtenerDatosAnimal(?)', [id]);

    if (rows[0].length === 0) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }

    // Devolver los datos del animal
    res.json(rows[0][0]); // rows[0][0] es el primer registro del resultado
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { getGanado, addGanado, updateGanado,getAnimalDetails  };
