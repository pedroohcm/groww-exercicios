/* RESPOSTA AQUI 👇 */


/* Questão 01

cria uma função que lê uma lista de número e retonar todos os números pares.
Exemplo: [1,2,3,4]
saída: [2,4]

Obs: você pode retonar 1 valor por 1 , ou utilizar um método chamado append.

exemplo prático
*/
<<<<<<< HEAD


function calculaPares() {
    var lista = [2,50, 7, -4]
    var lista2 = []
=======
var lista = [2, 4, 5, 6]
           
function calculaPares(lista) {
    var listaLocal = []
>>>>>>> 6a9e8dda34291f4aa51532ae5e156128db32c738
    var tamanhoLista = lista.length; // Método para retornar tamanho da lista

    //Nesse for eu percorro a lista de números que eu crie.
    
    for (var i = 0; i < tamanhoLista; i++) {
        //Nesse console.log(print) eu retorno cada número da lista 1 por vez
<<<<<<< HEAD
        console.log(lista[i])
        if (lista[i]%2=== 0) {
            lista2[i]  = lista[i]}
    
        //Agora é a sua vez! Termine o meu código retornando apenas os número pares
        //Ps.: Antes de rodar o código, teste ele no seu browser para ver como ele se comporta
    }
return lista2
=======
                
        if(lista[i]%2 === 0){
            listaLocal.push(lista[i])
        }        
        //Agora é a sua vez! Termine o meu código retornando apenas os número pares
        //Ps.: Antes de rodar o código, teste ele no seu browser para ver como ele se comporta
    }
    console.log(listaLocal)
>>>>>>> 6a9e8dda34291f4aa51532ae5e156128db32c738
}
/* Questão 02

Crie um programa que lê 5 números em sequência e retorne a soma deles.

Exemplo:
Entrada: 1
Entrada: 4
Entrada: 3
Entrada: 2
Entrada: 5
Saída: 15

O programa deverá perguntar 5 vezes por uma entrada
*/

/*function somaNumeros(valores) {
listavalores = [0,0,0,0,0]
for (var i = 0, i < 5, i++){
    var valor = listavalores[i]
    var soma = listavalores [i=0] + lista listavalores[i]}
return soma
}


/* Questão 01

O Brasil finalmente decidiu saber qual é o melhor time da atualidade. Decidiu chamar
os 4 principais times do seu país para um campeonamento. Foram chamados os time Flarinthinas,
Grêmense, Palmasco e Sants-fogo para um campeonato estilo ida e volta, onde os times
se enfretam 2 vezes, e todos os times se enfretam. Ao final, o time com mais vitórias
é consagrado o verdadeiro campeão do Brasil

Crie uma função que leia um objeto com todos os conflitos e calculo o time campeão

Ps.: Dei uma força para vocês
*/

var campeonato = {
    "nome-do-campeonato": "Campeões do Brasil",
    "jogos": {
        01: {
            "flarinthians": "vitoria",
            "gremense": "vitoria",
            "Palmasco": "derrota",
            "Santsfogo": "derrota"
        },
        02: {
            "flarinthians": "derrota",
            "gremense": "derrota",
            "Palmasco": "vitoria",
            "Santsfogo": "vitoria"
        }
        , 03: {
            "flarinthians": "vitoria",
            "gremense": "derrota",
            "Palmasco": "derrota",
            "Santsfogo": "vitoria"
        }
        , 04: {
            "flarinthians": "vitoria",
            "gremense": "derrota",
            "Palmasco": "vitoria",
            "Santsfogo": "derrota"
        }
        , 05: {
            "flarinthians": "derrota",
            "gremense": "derrota",
            "Palmasco": "vitoria",
            "Santsfogo": "vitoria"
        },
        06: {
            "flarinthians": "vitoria",
            "gremense": "derrota",
            "Palmasco": "vitoria",
            "Santsfogo": "derrota"
        }
    }
}

//Boa sorte!

function calculaCampeao(campeonamento) {

    var tamanhoObjeto = Object.keys(campeonamento.jogos).length // Retorna a quantidade de jogos no campeonato
    var contadorFla = 0;
    var contadorGre = 0;
    var contadorPal = 0;
    var contadorSant = 0;

    for (var i = 1; i <= tamanhoObjeto; i++) {

        if (campeonamento.jogos[i].flarinthians === "vitoria") {
            contadorFla++
        }
        if (campeonamento.jogos[i].gremense === "vitoria") {
            contadorGre++
        }
        if (campeonamento.jogos[i].Palmasco === "vitoria") {
            contadorPal++
        }
        if (campeonamento.jogos[i].Santsfogo === "vitoria") {
            contadorSant++
        }
    }

    console.log(`Vitorias do Fla : ${contadorFla}`)
    console.log(`Vitorias do Gre : ${contadorGre}`)
    console.log(`Vitorias do Pa : ${contadorPal}`)
    console.log(`Vitorias do Sa : ${contadorSant}`)

}
