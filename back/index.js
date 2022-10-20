const express = require('express')
const cors = require('cors')
const app = express()

const port = 8080

// Middleware
const logger = (req, res, next) => {
  console.log(`Endpoint hit: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
}
app.use(express.json())
app.use(logger)
app.use(cors())

// Routing
const filesRouter = require('./src/routes/files')

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json({ message: 'Hello Toolbox!' })
})

app.use('/files', filesRouter)

// Start
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
