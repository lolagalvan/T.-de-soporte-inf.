
const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 3000
const path= require("path")


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const views = path.join (__dirname, "vistas")
app.use(express.static(views));

app.get('/formulario', (req, res) => {
  res.sendFile(path.join(views,'index.html'))
})
app.get('/carrusel', (req, res) => {
  res.sendFile(path.join(views,'carrusel.html'))
}) 

app.post('/Insertar', (req, res)=>{
  var mysql = require('mysql');
 var con = mysql.createConnection({
    host: "localhost",
    user: "alumno",
    password: "alumno"
  });
  
  conexion.connect(function(err) {
    if (err) {
        console.error('Error: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
  });

  const{nombre, apellido, ciudad, provincia}= req.body;
  const sql = 'insert into mensaje values(NULL,"'+nombre+'","'+apellido+'","'+ciudad+'","'+provincia+'")';
  
  conexion.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  }); 
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


