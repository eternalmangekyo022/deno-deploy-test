import express from 'npm:express'
import cors from 'npm:cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
	const data = await (await fetch('https://nycpokemap.com/raids.php')).json()
	res.json(data)
})

const PORT = 80;
app.listen(PORT, () => console.log(PORT))
