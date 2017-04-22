// var peerCount = 0;

// //
// peerList[] = {}

var peerCount = 0;

function connect() {
    // Insantiate peer object
    // var peer = new Peer({
    //     host: 'localhost',
    //     port: 8081,
    //     path: '/peerjs',
    //     debug: 3,
    //     config: {'iceServers': [
    //     { url: 'stun:stun1.l.google.com:19302' }, {
    //             url: 'turn:numb.viagenie.ca',
    //             credential: 'muazkh', username: 'webrtc@live.com'
    //         }
    //     ]}
    // });
    
    var peer; // broswer's peer object
    var dataConn; // connection between browser peer and remote peer
    var remoteId; // id of the remote peer
    
    document.write( "<h1>Creating peer object...</h><br>" );
    document.write( "<h1>Connecting to server...</h><br>" );
    
    // Initialize peer object
    var peer = new Peer({
        host: 'localhost',
        port: 8081,
        path: '/peerjs',
        debug: 3,
        config: {'iceServers': [
        { url: 'stun:stun1.l.google.com:19302' },
        { url: 'turn:numb.viagenie.ca',
        credential: 'muazkh', username: 'webrtc@live.com' }
        ]}
    });
    
    // When 'open' event is triggered, give the user some information
    peer.on('open', function( id ) {
        document.write( "<h1>Peer object successfully created!</h><br>" );
        document.write( '<h2>Your Peer ID is: ' + id + '</h2><br>' );
    });
    
    // prompt for remote peer id
    remoteId = prompt( "Enter ID of remote peer: " );
    
    // whenever connection has been triggered by remote peer
    peer.on('connection', function(conn) { 
        // set our dataConn to conn
        dataConn = conn;
    });
    
    // establish data connection between browser peer and remote peer
    dataConn = peer.connect( remoteId );
    
    // Handle messages between peers
    // when connection between peers is established
    dataConn.on('open', function() {
        // Receive messages
        dataConn.on('data', function(data) {
            console.log('Received', data);
        });
    
        // Send messages
        dataConn.send('Hello!');
    });
    
    // // Increment peer count
    // peerCount += 1;
    
    // // Add new peer to the list
    // peerList.push()
    
    
                             
    // //get microphone data from web browser
    // navigator.getUserMedia = navigator.getUserMedia ||
    //                       navigator.webkitGetUserMedia ||
    //                       navigator.mozGetUserMedia ||
    //                       navigator.msGetUserMedia;
                         
    // navigator.getUserMedia(
    //     {audio:true, video:true},
    //     function(callback){},
    //     function(error){
    //         console.log(error)
    //         alert('an error occured')
    // })
    
    // peer.on('call', function(call) {
    //     // Answer the call, providing our mediaStream
    //     call.answer(navigator.getUserMedia);
    // });
}


//function joinGroup() {
    // //let user choose his id
    // var yourid = prompt("Choose your user id:")
    
    // //enter name/id of group
    // var groupid = prompt("Name/id of group you wish to connect to:")
    
    // //create peer based on user id
    // var peer = new Peer(yourid, {key: 'hogiwtt0dnecow29'})
    
    // //connect to group
    // var conn = peer.connect(groupid);
    
    // //get webcam and mic data
    // navigator.getUserMedia = navigator.getUserMedia ||
    //                       navigator.webkitGetUserMedia ||
    //                       navigator.mozGetUserMedia ||
    //                       navigator.msGetUserMedia
                         
    // navigator.getUserMedia(
    //     {audio:true, video:true},
    //     function(callback){},
    //     function(error){
    //         console.log(error)
    //         alert('an error occured')
    // })

    
    // //make call to group (aka "founder peer") providing audio stream
    // var call = peer.call(groupid, navigator.getUserMedia)
    
    // call.on('stream', function(stream) {
    //     document.getElementById('videoElement').src = 'stream'
    // })
//}

// document.getElementById("createGroup").onclick = createGroup
document.getElementById("connect").onclick = connect;
