import variaveis from "./variaveis.js"

var saldoAtual
var resultado
var meuSaldoLocalStorage

export function calculoSacar(valor){

    if(valor > variaveis.headerCarteira.saldoAtual.innerText){
        alert('Valor indisponível.')
    } else {

    saldoAtual = Number(variaveis.headerCarteira.saldoAtual.innerText) 
    resultado = saldoAtual - valor
    variaveis.headerCarteira.saldoAtual.innerHTML = resultado    

    localStorage.setItem('saldo', resultado)
    }
}

export function exibirSacar(){
    meuSaldoLocalStorage = localStorage.getItem('saldo')
    variaveis.headerCarteira.saldoAtual.innerHTML = meuSaldoLocalStorage
}
