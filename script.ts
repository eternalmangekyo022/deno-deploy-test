import { WebSocketServer } from 'node:ws'
//import axios from 'axios'

const port = 3000;
const ws = new WebSocketServer({ port }, () => console.log(port))

const uuids = [];


ws.on('connection', s => {
	s.loggedIn = false;

	s.onmessage = ({ data }) => {
		data = JSON.parse(data)
		switch(data.type) {
			case 'login':
				console.log(Object.keys(data))
				break
			
			case 'message':
				s.send(`You sent ${data.content}`)
				console.log(`=> ${data.content}`)
				break
		}
	}
	s.onclose = () => console.log('Closed')
})
