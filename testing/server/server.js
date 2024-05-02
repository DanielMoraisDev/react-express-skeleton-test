import express from 'express'
import bodyParser from 'body-parser'
const app = express()

const PORT = 8080 || 3030

app.use(bodyParser.json())

app.get('/api', (req, res) => {
    res.send('From server')
})

app.post('/api/login', (req, res) => {
    console.log(req.body)

    let messageResponse

    let {userId, password} = req.body

    if (userId !== "" && password !== "") {
        messageResponse = "Formulário enviado com sucesso"
    } else {
        messageResponse = "Preencha os campos corretamente"
    }

    res.json({"message" : messageResponse})
})

app.listen(PORT, () => console.log('http://localhost:' + PORT))