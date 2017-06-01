var app = require('./config/express')();
//var rotasProdutos = require('./app/routes/produtos')(app);

//Levantando do Servidor
app.listen(3000, function(){
  //console.log(app);
  console.log('Servidor Rodando!');
});
