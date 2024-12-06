//rutas para el celo de los animales

const express = require('express');
const router = express.Router();
const { getCelos, addCelo, updateCelo } = require('../controllers/celo.controller');

router.get('/', getCelos); // Listar todos los celos
router.post('/', addCelo); // Insertar un nuevo celo
router.put('/:id', updateCelo); // Editar un celo existente

module.exports = router;