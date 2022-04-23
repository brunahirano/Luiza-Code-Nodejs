//forEach - para percorrer um array no javascript

let frutas = ["Maçã", "Banana", "Melancia"]

frutas.forEach(function(elemento, index, lista){
   
    if(elemento.length >= 4){
        console.log(`A fruta ${elemento} tem mais de 4 letras`)
    } else{
        console.log(`A fruta ${elemento} tem menos que 4 letras`)
    }
    console.log(index, elemento);
});

console.log(frutas);
