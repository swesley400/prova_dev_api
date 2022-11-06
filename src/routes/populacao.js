const  { express } = require('../config/express')

const retornaPopulacao = require('../functions/retornaPopulacaoPorUf')

const router = express.Router()


router.get("/populacao/:uf",(req, res) => {
    console.log("acessou api populacao")
    const {uf} = req.params
    const retorno = retornaPopulacao(uf)
    retorno == '' ? res.status(400).json({erro: "uf nao localizado ou inexistente"}) : res.status(200).json(retorno)
       
    
})

module.exports = router