// Declare list of peers
var peerList = [];

// Set up express server and path to peer server
var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

var server = app.listen(8081);
var options = {debug: true};
var peerServer = ExpressPeerServer(server, options);

app.use('/peerserver', peerServer);

// When GET '/peerlist' request is sent from client, send peerList
app.get('/peerlist', function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(peerList);
});

// When connection from peer is established, push id to list
peerServer.on('connection', function(id) {
    // console.log('User with id ', id, ' has connected');
    peerList.push(id);
});

// When peer disconnects from server or peer is no longer reachable, remove id from list
peerServer.on('disconnect', function(id) { 
    var index = peerList.indexOf(id); //find index of id we must remove
    peerList.splice(index, 1); // remove id from list
});