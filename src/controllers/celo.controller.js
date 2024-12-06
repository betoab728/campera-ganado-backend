//controlador para celo de los animales, los campos son: id, idganado, fechaInicio, fechaFin, observaciones

const pool = require('../config/db');

// Obtener lista de celos
const getCelos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Celo');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nuevo celo

const addCelo = async (req, res) => {
    const { idganado, fechaInicio, fechaFin, observaciones } = req.body;
    
    try {
        const [result] = await pool.query(
        'INSERT INTO celo (idganado, fechaInicio, fechaFin, observaciones) VALUES (?, ?, ?, ?)',
        [idganado, fechaInicio, fechaFin, observaciones]
        );
    
        res.json({ id: result.insertId, idganado, fechaInicio, fechaFin, observaciones });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

//Editar un celo existente

const updateCelo = async (req, res) => {

    const { idganado, fechaInicio, fechaFin, observaciones } = req.body;
    const { id } = req.params;
    
    try {
        const [result] = await pool.query(
        'UPDATE celo SET idganado = ?, fechaInicio = ?, fechaFin = ?, observaciones = ? WHERE id = ?',
        [idganado, fechaInicio, fechaFin, observaciones, id]
        );
    
        res.json({ id, idganado, fechaInicio, fechaFin, observaciones });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

module.exports = { getCelos, addCelo, updateCelo };