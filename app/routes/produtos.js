/*module.exports = function (app) {
  //configuração da primeira rota.
  app.get('/produtos', function (req, res) {
    //Objeto da conexão
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    //Consulta
    produtosDAO.lista(function(err, results){
      // Render da Tela
      res.render('produtos/lista',{lista:results});
    });
    connection.end();
  });

  app.get('/produtos/form', function(req, res){
    res.render('produtos/form');
  });

  app.post('/produtos/salva', function(req, res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.salvar(produto, function(err, results){

    })
    app.get('/ibeer', function(req, res){
      res.render('ibeer-phonegap/login')
    })
  });
};*/
