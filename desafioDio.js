// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante


let exp = 5001;
let nome = "Felipe";
if (exp < 1001) {
    let nivel = "Ferro";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
} else if (exp < 2001) {
    let nivel = "Bronze";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
} else if (exp < 5001) {
    let nivel = "Prata";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
} else if (exp < 7001) {
    let nivel = "Ouro";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
} else if (exp < 8001) {
    let nivel = "Platina";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
} else if (exp < 9001) {
    let nivel = "Ascendente";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
} else if (exp <= 10001) {
    let nivel = "Imortal";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
} else {
    let nivel = "Radiante";
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
}


// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

