function solucao(tempo, distancia) {
    let preco;
if (tempo<5) {
    preco = 6*100;
}
else   
if (tempo<=60 && tempo>=5) {
    preco = ((1*tempo)+(0.5*distancia))*100;
}
else 
if (tempo>60 && distancia>=100) {
   preco = (distancia*1.5)*100;
}
else
if (tempo>60 && distancia<100) {
    preco = (distancia*2)*100;
}
console.log(preco);
}