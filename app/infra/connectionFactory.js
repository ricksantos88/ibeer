var mysql = require('mysql');
//FACTORY METHOD

var connectMYSQL = function (){
  console.log('Conectando com o MySQL');
  return mysql.createConnection({
         host : 'localhost',
         user : 'root',
         password : '', //no linux senha: mysql 
         database : 'casadocodigo_nodejs',
  });
};

//Wrapper
module.exports = function(){
  console.log('express-load carregando fabrica de conexões!!!');
  return connectMYSQL;
}
