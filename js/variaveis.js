
var headerCarteira ={
    nomeDonoConta: document.getElementById('nomeDonoConta'),
    agenciaNumero: document.getElementById('agenciaNumero'),
    contaNumero: document.getElementById('contaNumero'),
    saldoAtual: document.getElementById('saldoAtual'),
    tipoConta: document.getElementById('tipoConta')
}

var servicos = {
    depositarContainer: document.getElementById('depositar'),
    sacarContainer: document.getElementById('sacar'),
    linkServicoDepositar: document.getElementById('linkServicoDepositar'),
    linkServicoSacar: document.getElementById('linkServicoSacar'),
    linkServicoFecharConta: document.getElementById('linkServicoFecharConta'),
    depositarValor: document.getElementById('depositarValor'),
    sacarValor: document.getElementById('sacarValor'),
    bttDepositarValor: document.getElementById('bttDepositarValor'),
    bttSacarValor: document.getElementById('bttSacarValor'),
    cancelarDeposito: document.getElementById('cancelarDeposito'),
    cancelarSacar: document.getElementById('cancelarSacar')
}


export default {
    headerCarteira: headerCarteira,
    servicos: servicos
}
