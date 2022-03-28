//import
import variaveis from './variaveis.js'
import {calculoDeposito, exibirDeposito} from './depositar.js'
import {calculoSacar, exibirSacar} from './pagar.js'

//depositar
variaveis.servicos.linkServicoDepositar.addEventListener('click', function(){
    variaveis.servicos.depositarContainer.style.display= 'flex'
})

variaveis.servicos.cancelarDeposito.addEventListener('click', function(){
    variaveis.servicos.depositarContainer.style.display= 'none'
})

variaveis.servicos.bttDepositarValor.addEventListener('click', function(){
    calculoDeposito(Number(variaveis.servicos.depositarValor.value))
})

exibirDeposito()

//pagar
variaveis.servicos.linkServicoSacar.addEventListener('click', function(){
    variaveis.servicos.sacarContainer.style.display= 'flex'
})

variaveis.servicos.cancelarSacar.addEventListener('click', function(){
    variaveis.servicos.sacarContainer.style.display= 'none'
})

variaveis.servicos.bttSacarValor.addEventListener('click', function(){
    calculoSacar(Number(variaveis.servicos.sacarValor.value))
})

exibirSacar()


