// Create and connect peer object to PeerServerJS Cloud API
var peer = new Peer( {
    key: 'hogiwtt0dnecow29',
    initiator: location.hash === '#init',
    trickle: false
} )

// Discover peer ID
peer.on('signal', function(data) {
	document.getElementById('yourID').value = JSON.stringify(data)
});

document.getElementById('connect').addEventListener('click', function() {
    var otherID = JSON.parse(document.getElementById('otherID').value)
    peer.signal(otherID)
})

document.getElementById('send').addEventListender('click', function() {
    var yourMessage = document.getElementById('yourMessage').value
    peer.send(yourMessage);
})

peer.on('data', function(data) {
    document.getElementById('messages').textContent == data + '/n'
})

var video = document.querySelector("#videoElement")
