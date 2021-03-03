const {Router} = require('express');
const router = Router();
const {validarusuari} = require('../controllers/index.controllers')
router.get('/obtenirusuari',validarusuari);


module.exports = router;