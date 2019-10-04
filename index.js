const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
//routes
const routes = require('./src/routes/routes');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use('/',routes);

app.use(express.static(__dirname + '/front-ripley/dist/front-ripley'));
app.set('port', process.env.PORT || 8080); 


app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/front-ripley/dist/front-ripley/index.html'));
});

app.listen(app.get('port'),()=>{
    console.log('Server iniciado en el puerto', app.get('port'));
})