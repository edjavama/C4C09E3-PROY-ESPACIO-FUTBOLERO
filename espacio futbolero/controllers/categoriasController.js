const categoriamodel=require('../modells/categoriasSchem.js')
//método GET
const categoriaListar=async(req,res)=>{
    try{
        const categorias=await categoriamodel.find()//listado a traves de find
        res.status(200).send(categorias)
    }catch(error){
        consolelo.log('error al listar: '+error)
    }
}
const categoriaObtener=async(req,res)=>{
    const categoria=await categoriamodel.findById(req.params.id);
    if(categoria){
        res.send(categoria)
    }
    else{
        res.status(404).send({message:'Categoria no encontrada'})
    }
}
//método POST
const categoriaGuardar=async(req, res)=>{
    console.log(req.body);
    const nombre=req.body.nombre//saca el nombre de la consulta
    let respuesta={}
    if(nombre==''){
        respuesta={'msj': 'no se valido campo vacio'};
        res.status(400).json(respuesta);
    }else{
        try{
            const categoria=new categoriamodel(req.body);
            categoria.save();
            respuesta={'msj': 'categoria almacenada con exito'};
            res.status(200).json(respuesta);
        }catch(error){
            console.log('error de conexión '+error)
        }
    }
    
}
//método PUT
const categoriaActualizar=async(req,res)=>{
    console.log('put:');
    const{id,nombre}=req.body;
    try{
        if(id==''){
            res.status(400).send('error campo vacio')
        }
        if(nombre!=''){
            const categoria={}
            categoria.nombre=nombre
            const resp=await categoriamodel.updateOne(
                {_id:id},
                {$set:categoria},
                {nem:true}
            )
            console.log('categoria actualizado')
            res.status(200).send('actualizado')
        }
    }catch(error){
        console.log('eror: '+error);
        res.status(400).send("error al actualizar")
    }
}
//metodo DELETE
const categoriaEliminar=async(req,res)=>{
    const categoria=await categoriamodel.findById(req.params.id)
    if(categoria){
        await categoria.remove();
        res.send({message:'Categoria eliminada'})
    }
    else{
        res.status(404).send({message:'Categoria no encontrada'})
    }
}

module.exports={
    categoriaListar,
    categoriaGuardar,
    categoriaObtener,
    categoriaActualizar,
    categoriaEliminar
};