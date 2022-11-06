const populacaoEEstadoClass = require('../classes/populaoeestado')
const retornaListaDeEstados = require('./retornaListaDeEstados')


const jsonComUfEPopulacao = require('../jsons/populacao.json')

async function retornaPopulacaoEEstado(){
    
    const listVindoApiEsterna1 = await retornaListaDeEstados()
    const listVindoApiExterna = await listVindoApiEsterna1

    const MeuJsonComUfEEstado = jsonComUfEPopulacao


    const fazJuncaoComMap = await listVindoApiExterna.map((item) => {
        const retornaFiltro = MeuJsonComUfEEstado.filter( estadopop => estadopop.uf == item.uf)
        const criaClassComUfNomeEPopulacao = new populacaoEEstadoClass(item.nome, item.uf, retornaFiltro[0].populacao)
        return criaClassComUfNomeEPopulacao
    })

    return fazJuncaoComMap

    
}

module.exports = retornaPopulacaoEEstado