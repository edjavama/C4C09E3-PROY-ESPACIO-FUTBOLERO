const express = require('express');
const router = express.Router();
const equiposController=require('../controllers/partidosController.js');

router.get('/', function(req, res){
    res.send(equiposController.partidoListar());
})

module.exports=router;