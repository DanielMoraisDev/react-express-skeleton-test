import express from "express"
import bodyParser from 'body-parser'
const register = express.Router()

register.use(bodyParser.json())

register.post('/', (req, res) => {
    let messageResponse

    let {userId, password} = req.body

    if (userId !== "" && password !== "") {
        messageResponse = "Registro realizado com sucesso"
    } else {
        messageResponse = "Preencha os campos corretamente"
    }

    res.json({"message" : messageResponse})
});

export default register