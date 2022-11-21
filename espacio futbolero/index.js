const express = require('express');
const server = express();
const puerto=3000;
const eqruta=require('./routers/equiposRouter.js');
const psruta=require('./routers/partidosRouter');
const catruta=require('./routers/categoriasRouter');
const db=require('./config/db.js')

server.get('/', (req, res) => {
    res.send('Futbol');
    res.writeHead(200);
})

//rutas partidos o equipos
server.use(express.json());
server.use('/equipos',eqruta);
server.use('/partidos',psruta);
server.use('/categorias',catruta);

server.listen(puerto,function(){
    console.log("servidor escuchando");
})
db()