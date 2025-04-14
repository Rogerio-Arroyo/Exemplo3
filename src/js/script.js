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

//WHILE
let a=0
while(a <10){
    //console.log("o valor de é:", a)
    //string literais
    console.log(`o valor do while ${a}`)
    a++;
}
 
//do while
let b=0;
do{
    console.log(`do while ${b}`)
    b++;
}while(b <100)
   
//  JOGO DA ADIVINHAÇÃO
let palpite;
const sorteio =Math.floor(Math.random() * 10)+1;
 
do{
    palpite = parseInt(prompt("Escolha um número entre 1 e 10"))
    if(palpite !== sorteio){
        alert(`Tente Novamente`)
    }
}while(palpite !== sorteio)
 
alert(`Parabéns Você Ganhou ${palpite}`)

//funções - function
function saudacao(nome){
    console.log("Seja Bem-Vindo", nome)
}
saudacao("FIAP")

function semafaro(){
    let sinal1="Verde";
    let sinal2="Amarelo";
    let sinal3="Vermelho";

    alert(`semafaro ${sinal1}`);
    alert(`semafaro ${sinal2}`);
    alert(`semafaro ${sinal3}`);
    
}
semafaro();

//VAR - acessa dentro e fora do bloco, já o LET só acessa dentro do bloco 
function exemplo(){
    if(true){
        var num=100
        console.log("Dentro do bloco if", num)
    }
    console.log("Dentro do bloco função", num)
}
exemplo();

//CRIE UM PROGRAMA QUE VERIFICA SE O NÚMERO É PAR
function verificaPar(numero){
    if (numero % 2 === 0 ){
        console.log("O número é par")
    }
    else{
        console.log("O número é impar")
    }
}
verificaPar(10);