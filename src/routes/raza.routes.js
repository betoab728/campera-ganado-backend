//rutas para la raza de los animales

const express = require('express');
const router = express.Router();
const { getRaza, addRaza, updateRaza } = require('../controllers/raza.controller');

router.get('/', getRaza); // Listar todas las razas
router.post('/', addRaza); // Insertar una nueva raza
router.put('/:id', updateRaza); // Editar una raza existente

module.exports = router;
