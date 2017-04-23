// create peer object and connect to local peer server
var peer = new Peer({
        host: 'peerjs-test-69-joshlloyd.c9users.io', // host URL
        port: 8081,                                  // listening port
        path: '/peerserver',                         // path
        debug: 3                                     // debug info needed (3 = highest amount)
    });

// print user id to console
peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

// print number of peers to console
var numberOfPeers = peerList.length;
console.log('Number of peers contained in PeerServer: ' + numberOfPeers);