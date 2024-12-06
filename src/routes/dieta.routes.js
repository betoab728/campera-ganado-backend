//rutas para la dieta de los animales 

const express = require('express');
const router = express.Router();
const { getDietas, addDieta, updateDieta } = require('../controllers/dieta.controller');

router.get('/', getDietas); // Listar todas las dietas
router.post('/', addDieta); // Insertar una nueva dieta
router.put('/:id', updateDieta); // Editar una dieta existente

module.exports = router;