http=require('http');
url=require('url');
querystring = require('querystring');
  function onRequest(req,res){
     var path = url.parse(req.url).pathname;
     console.log('Request for'+path+'received.');
     var query =url.parse(req.url).query;
     console.log(query);
     var no1 =querystring.parse(query)["fname"];
     var no2=querystring.parse(query)["email"];
   console.log("Name:"+no1);
   console.log("E-mail id:"+no2);
  }
http.createServer(onRequest).listen(4001);
console.log('Server has Started.......');
