var messages = []
var peer_id, name, conn

document.getElementById("start").onclick = startSession()
document.getElementById("join").onclick = joinSession()

function startSession() {
    //create peer object and pass api key to 
    var peer = new Peer({key: 'hogiwtt0dnecow29'})

    //prompt user for his and destination peer id
    var yourid = prompt("Enter your id:")
    var destid = prompt("Enter destination id:")
    
    //connect to destination peer
    var conn = peer.connect(destid)
    
    //get media shim
    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia
                             
    //get video feed
    function getVideo(callback) {
        navigator.getUserMedia(
        {audio:true, video:true},
        callback,
        function(error){
            console.log(error)
            alert('an error occured')
        })
    }
    
    //answer call from destination peer
    peer.on('call', function(call) {
        //answer call providing media stream
        call.answer(navigator.mediaStream)
    })
}

function joinSession() {
    var peer = new Peer({key: 'hogiwtt0dnecow29'})

    //prompt user for his and destination peer id
    var yourid = prompt("Enter your id:")
    var destid = prompt("Enter destination id:")
    
    //connect to destination peer
    var conn = peer.destination(destid);
    
     //get media shim
    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia
                             
    //get video feed
    function getVideo(callback) {
        navigator.getUserMedia(
        {audio:true, video:true},
        callback,
        function(error){
            console.log(error)
            alert('an error occured')
        })
    }
    
    //make call to destination peer
    var call = peer.call(destid, navigator.getUserMedia)
}

var video = document.querySelector("#videoElement")
