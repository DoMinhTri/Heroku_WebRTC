var express = require("express");
var app     = express();
app.use(express.static("./"));
app.set("view engine","ejs");
app.set("./","index.html");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT||3000);
//////////////////////////////////////////////////////////////
io.on("connection", socket => {
	const id = socket.id;
	console.log(id);
	socket.on("disconnect", function(socket){

	});
	//////
	socket.on("DANG_CHAT", function(txt){
		socket.broadcast.emit("NOI_DUNG_CHAT", txt );
	});
});
//////////////////////////////////////////////////////////////
app.get("/", function(req, res){res.render("index");
}); 



