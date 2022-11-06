
class EstadoEPopulacao {
    constructor(nome, uf,populacao){
        this.nome = nome;
        this.uf = uf
        this.populacao = populacao;
    }
}

const teste = new EstadoEPopulacao ("wesley", 'we', 40000)

module.exports = EstadoEPopulacao