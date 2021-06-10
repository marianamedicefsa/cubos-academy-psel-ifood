function solucao(letra, palavras) {
	[
  {
    "letra": "m",
    "palavras": [
      "mamao",
      "maca",
      "melao",
      "melancia",
      "laranja"
    ]
  }
]
    let total =0;
    let ganharam = 0;
    let perderam =0;
    for (let item of palavras) {
       total++;
       }
   for (let item of palavras) {
       if (item[0] === letra) {
           ganharam++;
       }
   }
    perderam = (total - ganharam);
    console.log(perderam);
}