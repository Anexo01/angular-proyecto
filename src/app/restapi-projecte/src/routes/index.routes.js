const {Router} = require('express');
const router = Router();
const {validarusuari,insertarusuari} = require('../controllers/index.controllers')
router.post('/obtenirusuari',validarusuari);
router.post('/insertarusuari',insertarusuari);

module.exports = router;
