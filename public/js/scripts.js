function createGroup() {
    //ask name of user's group
    // var groupid = prompt("Enter name/id of the group:");
    
    //create peer object based on group name
    var peer = new Peer({
        host: 'localhost',
        port: 8081,
        path: '/peerjs',
        debug: 3,
        config: {'iceServers': [
        { url: 'stun:stun1.l.google.com:19302' }, {
                url: 'turn:numb.viagenie.ca',
                credential: 'muazkh', username: 'webrtc@live.com'
            }
        ]}
        
    });
    
    peer.on('open', function( id ) {
        console.log(id);
    });
    
    
                             
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

function joinGroup() {
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
}

document.getElementById("createGroup").onclick = createGroup
document.getElementById("joinGroup").onclick = joinGroup
