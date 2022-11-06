const {app, port, express} = require('./config/express')
const cors = require('cors')

const routerEstado = require('./routes/estados')
const routerPopulacao = require('./routes/populacao')
const retornaPopulacaoEEstado = require("./routes/populacaoComEstadoENome")

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{

    const json = [{ status: "Api Funcionando corretamente"}]
    res.status(200).send(json)


})

app.use(routerEstado)
app.use(routerPopulacao)
app.use(retornaPopulacaoEEstado)



app.listen(port, ()=>{
    console.log(`Servidor inicializado na porta http://localhost:${port}`)
})