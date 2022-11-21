const express = require('express');
const router = express.Router();
const categoriasController=require('../controllers/categoriasController.js');

/*router.get('/', function(req, res){
    res.send(categoriasController.categoriaListar());
})*/
router.get('/', categoriasController.categoriaListar);//Metodo Get
router.get('/:id', categoriasController.categoriaObtener);//Metodo Get
router.post('/',categoriasController.categoriaGuardar);//Metodo Post
router.put('/',categoriasController.categoriaActualizar);//Metodo Put
router.delete('/:id',categoriasController.categoriaEliminar);//Metodo Delete
module.exports=router;