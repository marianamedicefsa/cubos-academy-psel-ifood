function solucao(ano) {
    let divisao;
	if (ano >=2021) {
        divisao = (ano % 2)
        if (divisao === 0) {
            divisao = (ano % 4)
            if (divisao === 0) {
                console.log("JOGOS");
            }
            else 
                console.log("COPA")
        }
        else 
            console.log("MEH");
        }
        
}