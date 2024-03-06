// Este código usa a biblioteca prompt-sync para permitir que o usuário digite um número e verifica se ele pertence a sequência de Fibonacci, já que o comando prompt do Node.js não funciona no terminal.


const ps = require("prompt-sync"); // Importa a biblioteca prompt-sync
const prompt = ps(); // Cria a função prompt

let fibonacci = [0,1]; // Cria um array com os dois primeiros números da sequência de Fibonacci
let ultimo_numero = 0; // Cria uma variável para armazenar o último número da sequência de Fibonacci
let numero = prompt("Digite um número para verificar se ele pertence a sequência de Fibonacci: "); // Pede ao usuário para digitar um número
    while (ultimo_numero < numero) { // Enquanto o último número da sequência de Fibonacci for menor que o número digitado pelo usuário faça:
            fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]); // Adiciona o próximo número da sequência de Fibonacci ao array
            ultimo_numero = fibonacci[fibonacci.length - 1];  // Atualiza o último número da sequência de Fibonacci
    }

console.log(fibonacci.toString()); // Imprime a sequência de Fibonacci

if (fibonacci.lastIndexOf(parseInt(numero)) != -1){ // Se o número digitado pelo usuário estiver na sequência de Fibonacci faça:
    console.log("O número " + numero + " pertence a sequência de Fibonacci"); // Imprime que o número pertence a sequência de Fibonacci
} else {
    console.log("O número " + numero + " não pertence a sequência de Fibonacci"); // Imprime que o número não pertence a sequência de Fibonacci
}