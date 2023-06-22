var express = require('express');
app = express();
bodyParser = require('body-parser');
cors = require('cors');
config = require('./config/settings');
db = require('./db/postgres.js');
server = require('http').createServer(app);


app.set('port', (process.env.PORT || config.serverPort));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.set('RSA_PUB_KEY', (process.env.RSA_PUB_KEY || config.rsa.publicKey));
app.set('RSA_PRI_KEY', (process.env.RSA_PRI_KEY || config.rsa.privateKey));

require('./routes/route')(express, app);

server.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
    db.initConnection();

    db.models.User = require('./models/user.model');
    db.models.Role = require('./models/role.model');

});




