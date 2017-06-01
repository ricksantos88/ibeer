//arquivo de configuração do express
//declara a variavel que aponta para o modulo do express

var express = require('express');
var load = require('express-load'); //express load
var path = require('path'); //path
var bodyParser = require('body-parser'); //body-parse

//torna publico o a varivel do express
module.exports = function(){
  console.log('modulo sendo carregado!');
  //console.log('Passo: 1');
  var app = express();
  //a engine que cuida das views
  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  app.set(express.static(path.join(__dirname, 'public')));
  // middleware
  // bodyParser -> URL -> urlencoded
  app.use(bodyParser.urlencoded({extended: true}));
  // bodyParser -> json
  app.use(bodyParser.json());

  //
  console.log('express load');
  load('routes', {cwd : 'app'})
    .then('infra')
    .into(app);

  //CSS - em teoria
  app.use(express.static(__dirname + '/public'));
  //app.use(express.static(path.join(__dirname, '/public')));


  return app;
};
