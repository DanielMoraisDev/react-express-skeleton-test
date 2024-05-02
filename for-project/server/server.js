import express from 'express'
import bodyParser from 'body-parser'
const app = express()

import login from './routes/login.js';
import register from './routes/register.js';

const PORT = 8080 || 3030

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Home')
})

app.use('/login', login)
app.use('/register', register)

app.listen(PORT, () => console.log('http://localhost:' + PORT))