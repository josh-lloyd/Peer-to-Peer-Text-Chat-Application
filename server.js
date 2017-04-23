// Declare list of peers
var peerList = [];

// Create a peer server listening on port 8081
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 8081, path: '/peerserver'});

// When connection from peer is established, push id to list
server.on('connection', function(id) { 
    peerList.push(id);
});