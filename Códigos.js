for(var i = 1; i <10; i++){
	console.log(i)
}
// faz uma contagem de 1 até 10
for(var i = 1; i <10; i++){
	console.log(1)
}
// printa 10 vezez o número 1 

for(var index = 1; index < 10; index ++){
	console.log("Dia" + index)
}
// printa dia1, dia2, dia3

for(var i = 1; i <= 10; i ++){
	console.log("7 x"+ " " + i + " " + " = " + 7 * i)
}
// faz 7 x 1 = 7, 7 x 2 = 14 ...

var listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"]
for(i=0; i < listaDeCarros.length; i++){
    console.log("Nome do Carro:  " + listaDeCarros [i]);
}
// Nome do Carro: Fox , nome do Carro: Gol Nome do Carro: Astra Nome do Carro: Fiesta

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

for( i=0; i< listaDeLucro.length; i++){
    lucroTotal= listaDeLucro[i] + lucroTotal
}
console.log(lucroTotal); // soma cada parte da array = 1030

var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

for(i=0; i< listaDeGanhos.length; i++){
    if(listaDeGanhos[i] <0)
totalNegativos = totalNegativos + 1
} // conta os meses negativos = 3

var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

for(var i=0; i < listaDeFrutas.length; i++){
    if(listaDeFrutas[i] == busca){
    
    console.log("Sim, temos a fruta" + " "+ busca + " " + "disponível!")
    }
    
} // printa "Sim, temos a fruta Cajá"

var listaDeNomes = ["Carla", "Cristina", "Conceição"];
var busca = "Carla"
for(i=0; i < listaDeNomes.length; i++){
	if(listaDeNomes[i] == busca){
    console.log("O nome é: " + " " + busca)
    break 
    }
} // a utilização do break é que assim que o contador achar o  
//nome ele não percorrerá o restante da array.

var listaDeNomes = ["Carla", "Cristina", "Conceição"];
for(i=0; i < listaDeNomes.length; i++){
	if(listaDeNomes[i] == "Carla"){
    continue
    } console.log(listaDeNomes[i]);
} // ele pulará "Carla" e imprimirá somente o restante da array

for(i=0; i<=20; i++){
    if(i%2 == 0)
    console.log(i)
    } // conta os números pares

    for(i=0; i<=20; i++){
        if(i%2 > 0)
        continue
          console.log(i)
        } // usando o continue para printar a mesma coisa que o exercício anterior

        var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]
for(i=0; i < familia.length; i++){
  if(familia[i] == "Pedro"){
  console.log(familia[i] + " "+ "Souza")
    continue
  } 	
console.log(familia[i] + " " + "Macedo")
} // printa macedo para todos os nomes menos Pedro. Printa Souza só para Pedro

var baralho = ["Ás", "Dama", "Rei", "Valete"]
  
for(i=0; i < baralho.length; i ++){
  if(baralho[i] == "Rei"){
   console.log("Encontrei o Rei!")
    break
    
  } 

}// printa "Encontrei o Rei" 1 vez só 

function menorNumero(numeroA, numeroB){
    if(numeroA < numeroB){
        return numeroA
    } else {
        return numeroB
    }
} // retorna o menor número

Math.random() * 50 // escolhe um numero de 0 à 50, porém decimal 
Math.round(Math.random() * 50) // escolhe um número inteiro
console.log(Math.round(Math.random() * 50)) // printou 4

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
	if (nomesDosPresentes.indexOf(nomeDoAluno)){
    	return true
    } else {
    	return false
    }
} // código ruim


function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
    if(nomesDosPresentes.indexOf(nomeDoAluno) != -1){
        return true
    } else {
        return false
    }
} // pergunta se o nome do aluno está na lista de alunos presentes

function transformaParaMaiusculo(palavras){
    var palavrasMaiusculas = []    
      for(i=0; i< palavras.length; i++){
      
       palavras[i]= palavras[i].toUpperCase()
         palavrasMaiusculas.push(palavras[i])
        }
       return palavrasMaiusculas
    }
    console.log(transformaParaMaiusculo(["palavras", "cachorro", "lingua"]))
// Array ["PALAVRAS", "CACHORRO", "LINGUA"]    