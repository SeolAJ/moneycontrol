let contas = []
let money = ''
let saldoConta = 0
    while(money!='4'){
        money = prompt(`Qual operação deseja fazer 
    1 - depositar 
    2 - sacar 
    3 - ver extrato
    4 - sair`)
    
    switch(money){
        case "1":
        let depositoValor = parseFloat(prompt('Qual valor gostaria de depositar em sua conta?'))
        let depositoDescricao = prompt('Digite a descrição do deposito:')
        let status = 'C'
        saldoConta = saldoConta+depositoValor  

            const confirma = confirm('Confirma o depósito?')
        if (confirma) {  
                contas.push(`${depositoDescricao} - ${status} - R$ ${depositoValor}`)
        } 
        break

        case "2":
            let saque = parseFloat(prompt('Qual valor gostaria de retirar?'))
            let saqueDescricao = prompt('Descreva')
            saldoConta = saldoConta-saldoConta
        break
        
        case "3":
            let extrato = parseFloat(prompt('Gostaria de ver seu extrato?'))
            let verExtrato = parseFloat(prompt(`seu saldo é ${saldoConta}`))
        break

        case "4":
            let sair = alert('Obrigada por usar o sistema!')
        break


        default:
            alert('valor incorreto')
            break

    }



}


