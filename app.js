var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors());



app.get('/filesize', function(req, res) {
    
 
 

});





app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});