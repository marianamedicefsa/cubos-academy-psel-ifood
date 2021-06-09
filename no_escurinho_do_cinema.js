function solucao(obj) {
	
    if (obj.temIngresso === true ) {
        if (obj.idade >= obj.censura || obj.estaComPais === true) {
            if (obj.temCarteirinha === true) {
                console.log("MEIA");
            }               
            else if (obj.temCarteirinha === false && obj.idade <18) {
                console.log("MEIA");
            }
            else if (obj.temCarteirinha === false && obj.idade >=18) {
                 console.log("INTEIRA");
            }
        }
        else
          console.log("ACESSO NEGADO");  
    } 
     else 
         console.log("ACESSO NEGADO");    
 }