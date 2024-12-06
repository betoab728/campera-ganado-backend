//controlador de estado de salud con los campos de la tabla:
// idestado,idganado,fecha,peso,temperatura,observacion,estadovida

const pool = require('../config/db');

// Obtener lista de estados de salud
const getEstadosSalud = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM estadoSalud');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nuevo estado de salud

const addEstadoSalud = async (req, res) => {
    const { idganado, fecha, peso, temperatura, observacion, estadovida } = req.body;
    
    try {
        const [result] = await pool.query(
        'INSERT INTO estadoSalud (idganado, fecha, peso, temperatura, observacion, estadovida) VALUES (?, ?, ?, ?, ?, ?)',
        [idganado, fecha, peso, temperatura, observacion, estadovida]
        );
    
        res.json({ id: result.insertId, idganado, fecha, peso, temperatura, observacion, estadovida });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

//Editar un estado de salud existente

const updateEstadoSalud = async (req, res) => {
            
                const { idganado, fecha, peso, temperatura, observacion, estadovida } = req.body;
                const { id } = req.params;
                
                try {
                    const [result] = await pool.query(
                    'UPDATE estadoSalud SET idganado = ?, fecha = ?, peso = ?, temperatura = ?, observacion = ?, estadovida = ? WHERE idestado = ?',
                    [idganado, fecha, peso, temperatura, observacion, estadovida, id]
                    );
                
                    res.json({ id, idganado, fecha, peso, temperatura, observacion, estadovida });
                } catch (error) {
                    res.status(500).json({ error: error.message });
                }
                }


module.exports = { getEstadosSalud, addEstadoSalud, updateEstadoSalud };