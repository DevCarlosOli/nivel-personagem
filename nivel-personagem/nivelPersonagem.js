// desafio 1 classificador nível de héroi

// O que deve ser utilizado:
// Variáveis, operadores, laços de repetição, estruturas de decisões

// Objetivo
/* Crie uma variável para armazenar o nome e quantidade de experiência (xp) de um herói,
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor que 1.000 = Ferro
Se XP for 1.001 e 2.000 = Bronze
Se XP for 2.001 e 5.000 = Prata
Se XP for 5.001 e 7.000 = Ouro
Se XP for 7.001 e 8.000 = Platina
Se XP for 8.001 e 9.000 = Ascendente
Se XP for 9.001 e 10.000 = Imortal
Se XP for acima de 10.001 = Radiante
*/

// Saída
// Ao final deve exibir uma mensagem:
// O Héroi de nome **{nome}** está no nível de **{nível}**

const prompt = require('prompt-sync')({ sigint: true });

let nome = prompt("Digite seu nome: ");
let valorNivel = parseInt(prompt("Digite o nível do seu personagem: "));
let nivel = "";

console.log("**Desafio Nível do Herói**");
if (valorNivel < 0) {
    console.log("Não existe valor de nível inferior a 0!")
} else if (valorNivel > 0){        
    switch (true) {
        case (valorNivel <= 1000):
            nivel = "Ferro";
            break;
        case (valorNivel >= 1001 && valorNivel <= 2000):
            nivel = "Bronze";
            break;
        case (valorNivel >= 2001 && valorNivel <= 5000):
            nivel = "Prata";
            break;
        case (valorNivel >= 5001 && valorNivel <= 7000):
            nivel = "Ouro";
            break;
        case (valorNivel >= 7001 && valorNivel <= 8000):
            nivel = "Platina";
            break;
        case (valorNivel >= 8001 && valorNivel <= 9000):
            nivel = "Ascendente";
            break;
        case (valorNivel >= 9001 && valorNivel <= 10000):
            nivel = "Imortal";
            break;
        case (valorNivel >= 10001):
            nivel = "Radiante";
            break;
        default:       
            console.log(`**Erro** O Héroi ${nome}, não apresenta um valor de nível adequado. Favor verificar e tentar novamente!`);
            process.exit();
    };
    console.log(`O Héroi de nome **${nome}** está no nível de **${nivel}**`);
} else {
    console.log("Você digitou 0, o programa se encerrou. Obrigado!");
}