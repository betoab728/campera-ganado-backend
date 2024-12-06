//controlador para la tabla vacuna de los animales, los campos son:
// idvacuna, idganado, fecha, observaciones

const pool = require('../config/db');

// Obtener lista de vacunas
const getVacunas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM vacuna');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nueva vacuna

const addVacuna = async (req, res) => {
    const { idganado, fecha, observaciones } = req.body;
    
    try {
        const [result] = await pool.query(
        'INSERT INTO vacuna (idganado, fecha, observaciones) VALUES (?, ?, ?)',
        [idganado, fecha, observaciones]
        );
    
        res.json({ id: result.insertId, idganado, fecha, observaciones });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

//Editar una vacuna existente

const updateVacuna = async (req, res) => {
        
            const { idganado, fecha, observaciones } = req.body;
            const { id } = req.params;
            
            try {
                const [result] = await pool.query(
                'UPDATE vacuna SET idganado = ?, fecha = ?, observaciones = ? WHERE id = ?',
                [idganado, fecha, observaciones, id]
                );
            
                res.json({ id, idganado, fecha, observaciones });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            }   

module.exports = { getVacunas, addVacuna, updateVacuna };