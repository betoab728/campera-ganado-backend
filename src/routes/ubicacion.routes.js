//rutas para la ubicacion de los animales

const express = require('express');
const router = express.Router();
const { getUbicaciones, createUbicacion, updateUbicacion } = require('../controllers/ubicacion.controller');

router.get('/', getUbicaciones); // Listar todas las ubicaciones
router.post('/', createUbicacion); // Insertar una nueva ubicación
router.put('/:id', updateUbicacion); // Editar una ubicación existente

module.exports = router;