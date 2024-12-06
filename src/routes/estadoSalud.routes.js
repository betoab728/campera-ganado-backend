//rutas para el estado de salud de los animales
const express = require('express');
const router = express.Router();
const { getEstadosSalud, addEstadoSalud, updateEstadoSalud } = require('../controllers/estadoSalud.controller');

router.get('/', getEstadosSalud); // Listar todos los estados de salud
router.post('/', addEstadoSalud); // Insertar un nuevo estado de salud
router.put('/:id', updateEstadoSalud); // Editar un estado de salud existente

module.exports = router;