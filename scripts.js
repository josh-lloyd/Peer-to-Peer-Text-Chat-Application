var messages = []
var peer_id, name, conn

function startSession() {
    var yourid = prompt("Enter your id:")
    var destid = prompt("Enter destination id:")
}

function joinSession() {
    var yourid = prompt("Enter your id:")
    var destid = prompt("Enter destination id:")
}


var peer = new Peer( { key: 'hogiwtt0dnecow29' })

document.getElementById("start").onclick = startSession()
document.getElementById("join").onclick = joinSession()



//add get media property to navigator object
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia

//get user's current video feed
function getVideo(callback) {
    navigator.getUserMedia(
        { audio:true, video:true },
        callback,
        function(error){
            console.log(error)
            alert('an error occured')
        }
    )
}

// initialise video stream
function onReceiveStream(stream, element_id){
  var video = $('#' + element_id + ' video')[0];
  video.src = window.URL.createObjectURL(stream);
  window.peer_stream = stream;
}

//initialize video stream
getVideo(function(stream){
    window.localSteam = stream;
    onRecieveStream(stream, 'my-camera')
})

document.getElementById('send').addEventListender('click', function() {
    var yourMessage = document.getElementById('yourMessage').value
    peer.send(yourMessage);
})

peer.on('data', function(data) {
    document.getElementById('messages').textContent == data + '/n'
})

var video = document.querySelector("#videoElement")
