var peer = new Peer({
        host: 'peerjs-test-69-joshlloyd.c9users.io', // host URL
        port: 8081,                                  // listening port
        path: '/peerserver',                         // path
        debug: 3                                     // debug info needed (3 = highest amount)
    }); // local peer object
    
var connections = []; // data connections list

// join chat room
function joinChat() {
    // temorary list of peers
    var listOfPeers;
    
    // get peer list from peer server
    $.get("https://peerjs-test-69-joshlloyd.c9users.io:8081/peerlist").done(function (peerList) {
        listOfPeers = peerList;
    }
    
    // make connections for each peer already on the server
    for( var i=0; i<listOfPeers.length; i++ ) {
        var conn = peer.connect(listOfPeers[i]);
        
        // connect to current peer in loop
        conn = peer.connect(listOfPeers[i]);
        
        // when data connection is established
        conn.on('open', function() {
            // when data is recieved from a peer
            conn.on('data',function(data){
               document.getElementById("demo").innerHTML = data;
            });
        }
        // add peer to list
        connections.push(conn);
    }}
}

// whenever another peer tries to connect
peer.on('connection', function(conn) {
    // create data connection
    var conn = peer.connect(conn);
    
    // set connections listener functions
    conn.on('open', function() {
        // when data is recieved from a peer
        conn.on('data',function(data){
            // add message to html element
            document.getElementById("message").innerHTML = data;
        });
    }
    
    // push data connection to list of data connections if it doesn't exist already
    connections.push(conn);
});

// send message to all peers we're connected to
function broadcastMessage( message ) {
    // loop through each peer connection
    for( var i=0; i<dataConnections.length; i++ ){
        // for each data connection, send the message
        dataConnections[i].send(message);
    }
}