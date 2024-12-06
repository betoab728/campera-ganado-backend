//controlador para apareamiento de los animales, los campos son:
// idapareamiento, idhembra,idmacho, fecha,resultado, observaciones

const pool = require('../config/db');

// Obtener lista de apareamientos
const getApareamientos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM apareamiento');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nuevo apareamiento

const addApareamiento = async (req, res) => {
    const { idhembra, idmacho, fecha, resultado, observaciones } = req.body;
    
    try {
        const [result] = await pool.query(
        'INSERT INTO apareamiento (idhembra, idmacho, fecha, resultado, observaciones) VALUES (?, ?, ?, ?, ?)',
        [idhembra, idmacho, fecha, resultado, observaciones]
        );
    
        res.json({ id: result.insertId, idhembra, idmacho, fecha, resultado, observaciones });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

//Editar un apareamiento existente

const updateApareamiento = async (req, res) => {
        
            const { idhembra, idmacho, fecha, resultado, observaciones } = req.body;
            const { id } = req.params;
            
            try {
                const [result] = await pool.query(
                'UPDATE apareamiento SET idhembra = ?, idmacho = ?, fecha = ?, resultado = ?, observaciones = ? WHERE id = ?',
                [idhembra, idmacho, fecha, resultado, observaciones, id]
                );
            
                res.json({ id, idhembra, idmacho, fecha, resultado, observaciones });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
    }  


module.exports = { getApareamientos, addApareamiento, updateApareamiento };