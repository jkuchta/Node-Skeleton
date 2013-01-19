var express = require('express');
var app = express();
var environment = require('./environment');
var service = require('./service');
    service.init(environment);

require('./configuration')(app, express);
require('./controllers')(app, service, environment);

app.listen(app.get('port'));
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);