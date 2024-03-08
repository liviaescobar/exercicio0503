//Desenvolva um algoritmo que valide a idade da pessoa conforme as leis brasileiras de votação, retornando uma mensagem com as condições

//1. Não possui idade para votar
//2. Voto Facultativo
//3. Voto obrigatório

const idade = 20;


if (idade < 16){
    console.log("Não possui idade para votar")
}else if (idade >= 18 && idade <= 70 ){
    console.log("Voto obrigatório")
} else {
console.log("Voto facultativo")
};

