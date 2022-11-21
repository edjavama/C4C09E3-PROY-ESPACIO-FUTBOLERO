const mongoose=require('mongoose')
const categoriasSchem=mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        fcreado:{
            type:Date,
            default:Date.now()
        }
    }
)
module.exports=mongoose.model('categorias',categoriasSchem)