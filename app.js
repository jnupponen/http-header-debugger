var connect = require('connect');

var app = connect()
  .use(function(req, res){

    console.log(JSON.stringify(req.headers));
    res.end(JSON.stringify(req.headers, null, '    ')+'\n');

  })
 .listen(3000);

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});