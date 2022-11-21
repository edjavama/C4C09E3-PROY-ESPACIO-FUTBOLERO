const express = require('express');
const router = express.Router();
const equiposController=require('../controllers/equiposController.js');

router.get('/', function(req, res){
    res.send(equiposController.equipoListar());
})

module.exports=router;