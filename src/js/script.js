//DECLARAÇÕES E VARIAVEIS

var nome ="fiap";
console.log (nome);

let idade = 19;
console.log(idade);

const sobrenome="Fiapinho";
console.log(sobrenome);

//declarando um variavel indefinida
let nome1;
console.log(nome1)

//declarando uma variavel nula
let nome2=null;
console.log(nome2)

//TIPOS DE VARIAVEIS
let exemplo1 = 18;
console.log(typeof exemplo1)

let exemplo2 ="Tecnologia"
console.log(typeof exemplo2)

let exemplo3 =true;
console.log(typeof exemplo3)

let exemplo4 ={};
console.log(typeof exemplo4)

let exemplo5 =[];
console.log(typeof exemplo5)

//CONVERSÕES
let numFloat =123.456;
console.log(parseInt(numFloat));

let numString ="123.456"
console.log(parseFloat(numString));

//METODOS

//lenght = verifica o tamanho da string
let frase ="O mundo da tecnologia"
console.log(frase.length); 

//indexOF = retorna um trecho do texto (a posição)
let texto="A programação indomável e sustentavel"
console.log(texto.indexOf("ão"))

//slice = retornar um trecho do texto com inicio e final
let info="Processamento de ponto"
console.log(info.slice(2,6));

//OPERADORES ARITMÉTICOS
const num1=10;
const num2=20;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

//OPERADORES LÓGICOS
const num3=10;
const num4=20;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 < num4 || num4 < num3);

//OPERADORES DE COMPARAÇÃO
console.log(num3 == num4);
console.log(num3 === num4);  

//ESTRUTURA CONDICIONAL
//if
let logado="fiap";

if(logado=="fiap"){
    console.log("é verdadeiro")
}

//if/else
let usuario="teste"
if(usuario=="teste"){
    console.log("Usuario Correto")
}else{
    console.log("Usuario Errado")
}

//if ENCADEADO / ANINHADO: (else if)    

let idade1=15

if(idade1 < 15){     
    console.log("Menor de idade")
}else if(idade1 > 15 && idade1 < 18){
    console.log("Não é maior mas pode entrar")
}else{
    console.log("pode entrar é maior")
}

//switch case: melhor opção para fafzer um quiz 
let time="Palmeiras"

switch(time){
    case "Palmeiras":
        console.log("MELHOR TIME")
        break;
    case "Corinthians":
        console.log("Gambazada")
        break;
    default:
        console.log("Nenhuma das opções")
}

//ternario
let valor = 110;

let resultado = valor == 100 ? "Certo" : "Errado"        // ? = if; : = else
console.log(resultado) 

//ternario encadeado
let produto = "notebook"
const desconto = true;

const preco = produto =="notebook" ? desconto ? 100 :200 : produto =="mouse" ? 30 :100;  
console.log(preco)

//ESTRUTURA DE REPETIÇÃO 

//FOR
for(let i=0; i<=10;i++){        //declaração (lê até cheagr no 10), operação, decremento/encremento
    console.log("O valor de I é: ", i)
}