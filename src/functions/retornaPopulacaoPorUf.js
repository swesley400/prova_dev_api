const jsonComPopulacao = require("../jsons/populacao.json")


function retornaPopulacao(uf){
    const estado = uf.toUpperCase()
    
    const retornoDoFiltro = jsonComPopulacao.filter( estadoPopulacao => estadoPopulacao.uf == estado)
    return retornoDoFiltro
   
   
}

module.exports = retornaPopulacao

