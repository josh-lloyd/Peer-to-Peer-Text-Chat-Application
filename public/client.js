// create peer object and connect to local peer server
var peer = new Peer({
        host: 'peerjs-test-69-joshlloyd.c9users.io', // host URL
        port: 8081,                                  // listening port
        path: '/peerserver',                         // path
        debug: 3                                     // debug info needed (3 = highest amount)
    });

// create list of data connections
var dataConnections = [];

// print user id to console
peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

// establish connection with all peers in list...
// get peer list from server
$.get("https://peerjs-test-69-joshlloyd.c9users.io:8081/peerlist").done(function (peerList) {
    // loop through peer list
    for( var i=0; i<peerList.length; i++ ) {
        // create data connection between local peer and current remote peer
        var dataConn = peer.connect(i);
        // push data connection to list of data connections associated with this peer if it don't already exist
        dataConnections.indexOf(dataConn) === -1 ? dataConnections.push(dataConn) : console.log("This item already exists");
    }
});

// whenever another peer attempts to connect with us
peer.on('connection', function(conn) {
    // create data connection between remote peer and local peer
    var dataConn = peer.connect(conn);
    // push data connection to list of data connections if it doesn't exist already
    dataConnections.indexOf(dataConn) === -1 ? dataConnections.push(dataConn) : console.log("This item already exists");
});

// send message to all peers we're connected to
function sendMessageToPeers( message ) {
    // loop through each peer connection
    for( i=0; i<dataConnections.length; i++ ){
        // for each data connection, send the message
        dataConnections[i].send(message);
    }
}