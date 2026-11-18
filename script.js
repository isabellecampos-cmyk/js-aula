const nomeAluno = "Ana";
let idade = 20;
const matriculado = true;

console.log(nomeAluno, idade, matriculado);

console.log("O tipo do nome é:", typeof nomeAluno);
console.log("O tipo da idade é:", typeof idade);
console.log("O tipo de matriculado é:", typeof matriculado);

const a = 10;
const b = 3;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto da divisão:", a % b);

console.log("a é maior que b?", a > b);

console.log("a é igual a b?", a === b);

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("A soma dos números é:", n1 + n2);
console.log("O tipo de n1 é:", typeof n1);
console.log("O tipo de n2 é:", typeof n2);

const idadeUser = Number(prompt("Digite sua idade:"));
if (idadeUser >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

const nota = Number(prompt("Digite a nota (0 a 100):"));
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

const num = Number(prompt("Digite um número inteiro:"));
if (num % 2 === 0) {
  console.log("O número é Par");
} else {
  console.log("O número é Ímpar");
}

const idade18 = Number(prompt("Idade:"));
if (idade18 === 18) {
  console.log("Tem exatamente 18 anos");
} else {
  console.log("Idade diferente de 18");
  console.log(idade18);
}

// Desafio final 
const nome = prompt("Nome do aluno:");
const nota1 = Number(prompt("Primeira nota:"));
const nota2 = Number(prompt("Segunda nota:"));

const media = (nota1 + nota2) / 2;

let situacao;
if (media >= 70) {
  situacao = "Aprovado";
} else {
  situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media.toFixed(1)} | Situação: ${situacao}`);
