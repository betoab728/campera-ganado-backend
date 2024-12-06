//controlador para tratamiento de los animales, los campos son: idtratamiento, idganado, fecha, descripcion
const pool = require('../config/db');

// Obtener lista de tratamientos
const getTratamientos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tratamiento');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nuevo tratamiento

const addTratamiento = async (req, res) => {
    const { idganado, fecha, descripcion } = req.body;
    
    try {
        const [result] = await pool.query(
        'INSERT INTO tratamiento (idganado, fecha, descripcion) VALUES (?, ?, ?)',
        [idganado, fecha, descripcion]
        );
    
        res.json({ id: result.insertId, idganado, fecha, descripcion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

//Editar un tratamiento existente

const updateTratamiento = async (req, res) => {
        
            const { idganado, fecha, descripcion } = req.body;
            const { id } = req.params;
            
            try {
                const [result] = await pool.query(
                'UPDATE tratamiento SET idganado = ?, fecha = ?, descripcion = ? WHERE id = ?',
                [idganado, fecha, descripcion, id]
                );
            
                res.json({ id, idganado, fecha, descripcion });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            }   

module.exports = { getTratamientos, addTratamiento, updateTratamiento };
