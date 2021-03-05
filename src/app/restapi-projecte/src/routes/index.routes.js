const {Router} = require('express');
const router = Router();
const {validarusuari} = require('../controllers/index.controllers')
router.post('/obtenirusuari',validarusuari);


module.exports = router;
