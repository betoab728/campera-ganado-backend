const express = require('express');
const { getTipoGanado, addTipoGanado, updateTipoGanado } = require('../controllers/tipoGanado.controller');
const router = express.Router();

router.get('/', getTipoGanado); // Listar todos los tipos de ganado
router.post('/', addTipoGanado); // Insertar un nuevo tipo de ganado
router.put('/:id', updateTipoGanado); // Editar un tipo de ganado existente

module.exports = router;
