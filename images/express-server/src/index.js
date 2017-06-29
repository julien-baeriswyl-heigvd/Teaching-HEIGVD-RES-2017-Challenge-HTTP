var Chance  = require('chance');
var Express = require('express');

var chance  = new Chance();
var express = new Express();

express.get(
    '/challenge-b/test1',
    function (req, res)
    {
        console.log(req.get('Accept'));
        res.format(
            {
                'application/json': function(){
                    var data = '{"email":"julien.baeriswyl@heig-vd.ch"}';
                    res.set('Content-Type', 'application/json');
                    res.set('Content-Length', data.length);
                    res.status(200).send(data);
                },
                
                'text/html': function(){
                    var data = 'My email is <b>julien.baeriswyl@heig-vd.ch</b>';
                    res.set('Content-Type', 'text/html');
                    res.set('Content-Length', data.length);
                    res.status(200).send(data);
                },
                
                'text/xml': function() {
                    // log the request and respond with 406
                    res.removeHeader('Content-Type');
                    res.status(406).send('');
                }
            }
        );
    }
);

express.listen(
    80,
    function ()
    {
        console.log('Accepting HTTP requests on port 80.');
    }
);
