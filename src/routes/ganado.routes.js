const express = require('express');
const { getGanado, addGanado, updateGanado } = require('../controllers/ganado.controller');

const router = express.Router();

router.get('/', getGanado);
router.post('/', addGanado);
router.put('/:id', updateGanado);

module.exports = router;
