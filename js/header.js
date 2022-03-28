//import
import variaveis from './variaveis.js'

//mudando agencia, conta e saldo de forma dinâmica
variaveis.headerCarteira.nomeDonoConta.innerHTML = localStorage.getItem('nome')
variaveis.headerCarteira.agenciaNumero.innerHTML = localStorage.getItem('agencia')
variaveis.headerCarteira.contaNumero.innerHTML = localStorage.getItem('conta')
variaveis.headerCarteira.tipoConta.innerHTML = localStorage.getItem('tipo conta')