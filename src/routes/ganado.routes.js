const express = require('express');
const { getGanado, addGanado, updateGanado,getAnimalDetails  } = require('../controllers/ganado.controller');

const router = express.Router();

router.get('/', getGanado);
router.post('/', addGanado);
router.put('/:id', updateGanado);
router.get('/:id', getAnimalDetails);

module.exports = router;
