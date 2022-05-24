// Primeiros Passos - Variáveis

var myName = "Osmar";
const birthCity = "Manaus";
let birthYear = 1997;

// console.log (birthCity); Impressão no console.

// const não pode retribuir valores. Somente var e let.

// camelCase: Curvatura de camelo. Primeira letra minúscula. Segunda palavra maiúscula.

/*-------------------------------------------*/

// Tipos Primitivos

let movie = "Vingadores"; // string literal.
let score = 10.89; // number literal.
let isValid = true; // boolean.
let name; // undefined.
let color = null; // redefinição.

/*-------------------------------------------*/

// Operações Aritméticas

let salary = 3500;

/*
console.log(salary + salary); // mais.
console.log(salary - salary); // menos.
console.log(salary * salary); // multiplicar.
console.log(salary / salary); // dividir.
console.log(3 ** 3); // potência.
*/

salary++; // simbolo ++: salary = salary + 1;

// console.log(salary);

/*-------------------------------------------*/

// if (se) & else (senão)

/* estrutura

if(condicao) {
    // codigo
}
else if(outraCondicao) {
    // outra condicao
}
else {
    // codigo senão
}

*/

let trybe = 17;

if(trybe >= 13 && trybe < 14.40) {
    console.log("Esquenta!");
}
else if (trybe >= 15.30 && trybe < 16.50) {
    console.log("Aula ao vivo!")
}
else if (trybe >= 18.40 && trybe < 19) {
    console.log("Fechamento!")
}
else {
    console.log("Fora dos momentos assincronos!")
}

/*-------------------------------------------*/

// Operadores Lógicos

// && - "AND"

const comida = 'pao na chapa';
const bebida = 'cafezinho';

if (bebida ==='cafezinho' && comida === 'pao na chapa') {
    console.log('Muito obrigado pela refeicao :)');
} else {
    console.log('Acho que houve um engano com meu pedido.');
}

/*
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
*/

// || - "OR"

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

/*
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
*/

// ! - "NOT"

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

// o operador ! (exclamação) pode inverter o valor booleano de elemento.

/*-------------------------------------------*/

// Switch e Case - Estruturas Condicionais

let trafficLight = "amarelo";

switch(trafficLight) {
    case "vermelho":
        console.log("Pare!");
        break; // Se a condição do switch for atendida, o break serve pra parar o código.

    case "amarelo":
        console.log("Atenção!");
        break;

    case "verde":
        console.log("Siga!");
        break;

    default:
        console.log("Valor não identificado.")
    
}

/*A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default. */