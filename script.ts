import { WebSocketServer } from "https://deno.land/x/websocket@v0.1.4/mod.ts";

const wss = new WebSocketServer(8080);
wss.on("connection", function (ws) {
  ws.on("message", function (data) {
	data = JSON.parse(data)
	switch(data.type) {
		case 'login':
			console.log(Object.keys(data))
			break
		
		case 'message':
			ws.send(`You sent ${data.content}`)
			console.log(`=> ${data.content}`)
			break
	}
    ws.send(data);
  });
});
