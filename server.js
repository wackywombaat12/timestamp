var express = require("express");
var app = express();
var path = require('path');
var moment = require('moment');

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/:date_string', function (req, res) {
    
    var date = moment(req.params.date_string, 'MMMM DD, YYYY', true);
  
    if (!date.isValid()) {
        date = moment.unix(req.params.timestamp);
    }
  
    if (!date.isValid()) {
        res.json({
            'unix': null,
            'humanReadable': null
        });
    }
  
    res.json({
        'unix': date.format('X'),
        'humanReadable': date.format('MMMM DD, YYYY')
    });

})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})