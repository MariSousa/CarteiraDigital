import variaveis from "./variaveis.js"

var saldoAtual
var resultado
var meuSaldoLocalStorage

export function calculoDeposito(valor){
    saldoAtual = Number(variaveis.headerCarteira.saldoAtual.innerText) 
    resultado = saldoAtual + valor
    variaveis.headerCarteira.saldoAtual.innerHTML = resultado    

    localStorage.setItem('saldo', resultado)
}

export function exibirDeposito(){
    meuSaldoLocalStorage = localStorage.getItem('saldo')
    variaveis.headerCarteira.saldoAtual.innerHTML = meuSaldoLocalStorage
}
