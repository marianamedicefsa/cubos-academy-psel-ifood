function solucao(produtos) {
 
    let totaltop =0;
    let totalmenor =0;
    let total = 0;
    let percentualtop = 0; 
    for (let item of produtos){
        const valor = item.preco;
        if ( valor > 10000) {
            totaltop = (totaltop+valor);
      }
            else {  
            totalmenor = (totalmenor+valor);
        }
    }
    total = totalmenor+totaltop;
    percentualtop = (totaltop/total);
    const resposta = { totalTop: totaltop, percentual: percentualtop }
    console.log(resposta);
    
}