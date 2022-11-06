const {express} = require('../config/express')

const estados = require('../functions/retornaListaDeEstados')

const router = express.Router()

router.get('/estados', async (req, res) =>{
    console.log("acessou api estados")
    res.status(200).json( await estados())
})

module.exports = router