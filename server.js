import express from 'express'
import session from 'express-session'
import validator from 'email-validator'
import tasksRouter from './routes/tasks.js'

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// übernommen von den Präsentationsfolien
app.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {}
  })
)

const authenticate = (req, res, next) => {
  if (req.session.email) {
    next()
  } else {
    res.status(403).json({ error: 'You are not logged in, access denied' })
  }
}

const secretAdminCredentials = {
  password: 'm295'
}

app.use('/tasks', authenticate, tasksRouter)

app.get('/', (req, res) => {
  res.send('Hello Todo app')
})

// /login /verify /logout sind inspiriert von den Präsentationsfolien
app.post('/login', (req, res) => {
  const { email, password } = req.body
  const lowerEmail = email?.toLowerCase()
  const valid = validator.validate(lowerEmail)
  if (!valid) {
    res.status(400).json({ error: 'invalid email format' })
  }
  if (
    password === secretAdminCredentials.password
  ) {
    req.session.email = lowerEmail
    res.status(201).json({ email: req.session.email })
  } else {
    res.status(401).send('Invalid credentials')
  }
})

app.get('/verify', (req, res) => {
  if (req.session.email) {
    res.status(200).json({ email: req.session.email })
  } else {
    res.status(401).json({ error: 'You are not logged in' })
  }
})

app.delete('/logout', (req, res) => {
  if (req.session.email) {
    req.session.email = null
    res.sendStatus(204)
  } else {
    res.status(401).json({ error: 'You are not logged in' })
  }
})

app.get('/*', (req, res) => {
  const url = req.originalUrl
  res.status(404).json({ error: `${url} could not be found` })
})

app.listen(port, () => {
  console.log(`Todo app is listening on port ${port}`)
})
