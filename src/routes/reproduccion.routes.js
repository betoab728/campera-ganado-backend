//ruta para la repdroduccion de los animales

const express = require('express');
const router = express.Router();

const { getReproducciones, addReproduccion, updateReproduccion } = require('../controllers/reproduccion.controller');

router.get('/', getReproducciones); // Listar todas las reproducciones
router.post('/', addReproduccion); // Insertar una nueva reproduccion
router.put('/:id', updateReproduccion); // Editar una reproduccion existente

module.exports = router;