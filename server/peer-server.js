//create instance of peer server
// var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: '8081',
    path: '/peerjs'
//   ssl: {
//     key: fs.readFileSync('/etc/ssl/certs/private'),
//     cert: fs.readFileSync('/etc/ssl/certs/ca-certificates.crt')
//   }
});