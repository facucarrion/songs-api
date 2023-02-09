import express from 'express'

const app = express()
app.use(express.json()) // Middleware -> Req to JSON

const PORT = 3000

app.get('/ping', (_req, res => {
  console.log('Someone pinged me!');
  res.send('pong')
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})