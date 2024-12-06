//rutas para los tratamientos de los animales
const express = require('express');
const router = express.Router();
const { getTratamientos, addTratamiento, updateTratamiento } = require('../controllers/tratamiento.controller');

router.get('/', getTratamientos); // Listar todos los tratamientos
router.post('/', addTratamiento); // Insertar un nuevo tratamiento
router.put('/:id', updateTratamiento); // Editar un tratamiento existente

module.exports = router;