let contas = []
let money = ''
let saldoConta = 0
let extrato = ''
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
            let status2 = 'D'
            saldoConta = saldoConta-saque

                const confirme = confirm('Confirma retirada?')
        if (confirme) {
                contas.push(`${saqueDescricao} - ${status2} - R$ ${saque}`)
            }
            break
        
        case "3":
            for(let i=0; i<contas.length; i++){
                extrato += contas[i]
            } 
            alert(`${extrato}`)
        break

        case "4":
            let sair = alert('Obrigada por usar o sistema!')
        break


        default:
            alert('valor incorreto')
            break

    }



}


