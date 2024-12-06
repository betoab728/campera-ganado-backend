//rutas para las vacunas de los animales

const express = require('express');

const router = express.Router();

const { getVacunas, addVacuna, updateVacuna } = require('../controllers/vacuna.controller');

router.get('/', getVacunas); // Listar todas las vacunas
router.post('/', addVacuna); // Insertar una nueva vacuna
router.put('/:id', updateVacuna); // Editar una vacuna existente

module.exports = router;