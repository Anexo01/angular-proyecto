const {Router} = require('express');
const router = Router();
const {validarusuari,insertarusuari,activat,desactivat} = require('../controllers/index.controllers')
router.post('/obtenirusuari',validarusuari);
router.post('/insertarusuari',insertarusuari);
router.put('/activat',activat);
router.put('/desactivat',desactivat)

module.exports = router;
