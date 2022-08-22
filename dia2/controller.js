export class Conhecer{
    _nome
    _idade
    _linguagem

    constructor(nome, idade, linguagem){
        this._nome = nome;
        this._idade = idade;
        this._linguagem = linguagem;
    }

    mostra(){
        alert(`Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!`)
    }
}
