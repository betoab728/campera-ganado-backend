//rutas para el apareamiento de los animales
const express = require('express');
const router = express.Router();
const { getApareamientos, addApareamiento, updateApareamiento } = require('../controllers/apareamiento.controller');
router.get('/', getApareamientos); // Listar todos los apareamientos
router.post('/', addApareamiento); // Insertar un nuevo apareamiento
router.put('/:id', updateApareamiento); // Editar un apareamiento existente
module.exports = router;