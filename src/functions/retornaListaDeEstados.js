const urlApiEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

const classEstado = require("../classes/estado")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


async function retornaListaDeEstados (){
    try{
        const estados = await fetch(urlApiEstados)
        const estadosJson = await estados.json()
        const estadosRetornados = await estadosJson
        const criaEstado = await estadosRetornados.map( estado => new classEstado(estado.nome, estado.sigla ))
        return  criaEstado
       
    }
    catch(err){
        console.log(err)
    }
}

module.exports = retornaListaDeEstados


