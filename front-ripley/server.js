const express = require('express');
const path = require('path');
 
const app = express();
 

app.use(express.static(__dirname + '.front-ripley/dist/front-ripley'));
app.set('port', process.env.PORT || 3000); 


app.get('*', function(req,res) {
  
  res.sendFile(path.join(__dirname + '.front-ripley/dist/front-ripley/index.html'));
});

app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado');
});