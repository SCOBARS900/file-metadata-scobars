var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer  = require('multer')


var app = express();

var upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors());



app.post('/filesize', upload.single('fileC'), function(req, res, next) {
    
return res.json( {"size": req.file.size} );

});





app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});