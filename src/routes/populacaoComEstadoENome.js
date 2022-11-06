const {express} = require('../config/express')
const retornaPopulacaoEEstado = require("../functions/retornaPopulacaoEEstado")

const router = express.Router()


router.get("/estadoepopulacao", async(req, res) =>{
    console.log("acessou api estados e populacao")
    res.status(200).json(
        await retornaPopulacaoEEstado()
    )
})

module.exports = router