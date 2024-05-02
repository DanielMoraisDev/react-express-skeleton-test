import express from "express"
import bodyParser from 'body-parser'
const login = express.Router()

login.use(bodyParser.json())

login.post('/', (req, res) => {
    let messageResponse

    let {userId, password} = req.body

    if (userId !== "" && password !== "") {
        messageResponse = "Login realizado com sucesso"
    } else {
        messageResponse = "Preencha os campos corretamente"
    }

    res.json({"message" : messageResponse})
});

export default login