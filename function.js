const socket = io("http://localhost:3000");

const peer = new Peer();
peer.on('open', id => {
	$("#my-peer").append(id);
});
///////////////////////////////////////////////////
function LogData(sData){ $("#log").html(sData); }
///////////////////////////////////////////////////
$('#btSend').click(() => {
    const sChat = $("#txtChat").val();
	const id    = $("#my-peer").html();
	//LogData(sChat + " - " + id);
    socket.emit('DANG_CHAT', sChat);
});
///////////////////////////////////////////////////
socket.on("NOI_DUNG_CHAT", function(txt){
	$("#ulUser").append("<li>" + txt + "</li>");
});