let inputNomeDono = document.getElementById('nomeDono')
let inputTipoConta = document.getElementById('tipoConta')
let bttAbrirConta = document.getElementById('bttAbrirConta')

class ContaBanco{
  constructor(nomeDono, tipoConta, numeroAgencia, numeroConta, status){
    this.nomeDono = nomeDono
    this.tipoConta = tipoConta
    this.numeroAgencia = numeroAgencia
    this.numeroConta = numeroConta
    this.status = false
  }
}

let agAleatorio = Math.floor(Math.random()*100)
let contaAleatorio = Math.floor(Math.random()*100)
let novoCliente  
  
  //abrir conta
bttAbrirConta.addEventListener('click', function(){
  novoCliente = new ContaBanco(inputNomeDono.value, inputTipoConta.value, agAleatorio, contaAleatorio) 
  novoCliente.status = true
    abrirConta()     
    //novoCliente.abrirConta() 
    console.log(novoCliente)
})

function abrirConta(){    
  localStorage.setItem('nome', novoCliente.nomeDono)
  localStorage.setItem('agencia', novoCliente.numeroAgencia)
  localStorage.setItem('tipo conta', novoCliente.tipoConta)
  localStorage.setItem('conta', novoCliente.numeroConta)
  window.location.href = 'carteira.html';   
}

