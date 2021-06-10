function solucao(precos) {
    
    let pagar = 0;
    let desconto = 0;
    let total = 0;
    let compras =0;
    let menor = precos[0]; 
    let i = 0;
    let soma = 0;
    let numero = precos.length;
    for (let item of precos) {
        soma =(soma+item); 
    }
    for (let item of precos) {
        if (item < menor) {
            menor = item }    
}
        if (numero >=5) {
            pagar = (soma-menor);
            console.log(pagar);
        }
            else {pagar = soma;
            console.log(pagar);  }
    
}