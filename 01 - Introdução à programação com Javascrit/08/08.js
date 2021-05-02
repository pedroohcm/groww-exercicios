/* RESPOSTA AQUI 👇 */

/* Questão 01

Crie uma função que receba 1 número e calculo a soma de todos inteiros até ele
exemplo:
adicionaNumero(3)
1 + 2 + 3 = 6
*/
function somaate (number=0){
var soma = 0
for (var i = 0; i < number; i++){
    soma = soma + i        
        console.log(`A soma dos valores é  igual a ${soma}`)}
}
/* Questão 02 
Cria uma função que checa que compara dois arrays e retorne todos os números que estão nos dois

exemplo:
funcaoComparaArray([2,5,6], [2,7,6]) -> [2,6]

Não é necessário sempre receber um array na função, pode fazer com um array estatíco

*/
function comparaosarray () {
    var lista1 = [3,5,4,9]
    var lista2 = [5,6,9,11]
    var emcomum = []
    var j = 0
    for (var i =0; i<lista1.length; i++){
        for (var j =0; j<lista2.length; j++){
            if (lista1[i]==lista2[j]){
                emcomum = lista1[i]
                console.log(`A lista com os valores em comum é: ${emcomum}`)
            }
        }
    }
}
/* Questão 03

Crie uma função que receba duas números como argumento(numero, tamanho) e retorne um array
com todos os multiplos do número, até o tamanho definido.
exemplo:
multiplosArray(7,5)
retorno [7,14,21,28,35]

*/
function pa (n1,n2){
var resultado = []

for (var i = 0; i < n2; i++){
       var total = n1[i] + n1
       resultado = total [i]
       console.log(`A lista da progressão aritmética é:  ${resultado}`)
}
/* Questão 04

Crie uma função que receba um número como parametro e retorne todos os seus divisores

exemplo:
divisor(12) -> [1,2,3,4,6,12]
*/
function achardivisores (n1){
    listinha = []
    for (i=n1; i=0; i-- ){
        if (n1%n1[i]==0){
            listinha = n1[i]
            console.log(`Os divisores são: ${listinha}`)}
        }
    }
}
