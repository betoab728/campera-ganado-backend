//controlador para reproduccion de los animales, los campos son: 
//idreproduccion, idganado, fecha, resultado,crias, observaciones

const pool = require('../config/db');

// Obtener lista de reproducciones
const getReproducciones = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM reproduccion');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nueva reproduccion

const addReproduccion = async (req, res) => {
    const { idganado, fecha, resultado, crias, observaciones } = req.body;
    
    try {
        const [result] = await pool.query(
        'INSERT INTO reproduccion (idganado, fecha, resultado, crias, observaciones) VALUES (?, ?, ?, ?, ?)',
        [idganado, fecha, resultado, crias, observaciones]
        );
    
        res.json({ id: result.insertId, idganado, fecha, resultado, crias, observaciones });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

//Editar una reproduccion existente

const updateReproduccion = async (req, res) => {
    
        const { idganado, fecha, resultado, crias, observaciones } = req.body;
        const { id } = req.params;
        
        try {
            const [result] = await pool.query(
            'UPDATE reproduccion SET idganado = ?, fecha = ?, resultado = ?, crias = ?, observaciones = ? WHERE id = ?',
            [idganado, fecha, resultado, crias, observaciones, id]
            );
        
            res.json({ id, idganado, fecha, resultado, crias, observaciones });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        }   

module.exports = { getReproducciones, addReproduccion, updateReproduccion };