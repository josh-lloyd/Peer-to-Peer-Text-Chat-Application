var peer = new Peer({
        host: 'peerjs-test-69-joshlloyd.c9users.io', // host URL
        port: 8081,                                  // listening port
        path: '/peerserver',                         // path
        debug: 3                                     // debug info needed (3 = highest amount)
    }); // local peer object
    
var remotePeerIds = []; // remote peers list
var dataConnections = []; // data connections list

function joinChat() {
    // temorary list of peers
    var listOfPeers;
    
    // get peer list from peer server
    $.get("https://peerjs-test-69-joshlloyd.c9users.io:8081/peerlist").done(function (peerList) {
        listOfPeers = peerList;
    }
    
    for( var i=0; i<listOfPeers.length; i++ ) {
        
    }
    
    conn.on('open', function() {
        console.log("Connected with peer: "+remotePeerId);
        conn.on('data',function(data){
           // You can do whatever you want with the data from this connection - this is also the main part
           // dataHandler(conn,data);
        });
        conn.on('error',function(){
          // handle error 
          // connectionError(conn);
        });

        conn.on('close',function(){
          // Handle connection closed
          // connectionClose(conn);
        });
        connections.push(conn);
    });
  });
    
    var conn = peer.connect(remotePeerId);
        handleConnection(conn);
    }
    
    // Handle recieved connections
    peer.on('connection',function(conn){
         handleConnection(conn);
    });
}

// whenever another peer attempts to connect with us
peer.on('connection', function(conn) {
    // create data connection between remote peer and local peer
    var dataConn = peer.connect(conn);
    // push data connection to list of data connections if it doesn't exist already
    dataConnections.indexOf(dataConn) === -1 ? dataConnections.push(dataConn) : console.log("This item already exists");
});

// send message to all peers we're connected to
function broadcastMessage( message ) {
    // loop through each peer connection
    for( var i=0; i<dataConnections.length; i++ ){
        // for each data connection, send the message
        dataConnections[i].send(message);
    }
}

dataConnections.on('data', function(data) {
    console.log('Received', data);
  });