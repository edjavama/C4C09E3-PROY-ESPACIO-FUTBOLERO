const mongoose=require('mongoose');
const URIDB='mongodb://127.0.0.1:27017/futbol'

module.exports=()=>{
    const conect=()=>{
        //conectar la bd
        mongoose.connect(
            URIDB,
            {
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
            },
            (err)=>{
                if(err){
                    console.log('error a la bd'+err)
                }else{
                    console.log('conect ok')
                }
            }
        )
    }
    conect()
}