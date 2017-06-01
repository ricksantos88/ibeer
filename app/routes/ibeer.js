module.exports = function(app){
  app.get('/ibeer', function(req, res){
    res.render('ibeer/login');
  })
};
