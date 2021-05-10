/* RESPOSTA AQUI 👇 */

/* Questão 01 

Crie uma função que receba um array, some todos os valores do array e retorne se é par ou impar

Exemplo:
calculaPar([1])
retorno: impar

calculaPar([0,1,5])
retorno: par
*/
function calculaParporfavo (lista) {
//var soma = 0

<<<<<<< HEAD
    //console.log ($listanumeros){
    for (var i = 0; i < lista.length; i++){
    var soma = soma + listanumeros[i] }
        if (soma$2===0){
=======
function calculaPar(lista){
    var i = 0; //Variavel incrementadora que vai de 0 ~ tamanho da lista
    var soma = 0; //Variavel auxiliar para somar todos os itens,
    while(i < lista.length){
        soma = soma + lista[i]
        i++        
    }
    if( soma%2 === 0){
        console.log(`Número par ${soma}`)
    }else{
        console.log(`Número Impar ${soma}`)
    }
}



function calculaParporfavo (lista) {
var soma = 0
    //console.log ($listanumeros){
    for (var i = 0; i < lista.length; i++){
    soma = lista[i] + soma
        if (soma%2==0) {
>>>>>>> af8eab88ab06cf0008549c4d03a30eb7f2cada26
            console.log(`A soma dos valores é par e igual a ${soma}`)}
        else {
            console.log(`a soma dos valores é impar e igual a ${soma}` )}
            
<<<<<<< HEAD
    }               
                            
                                            
=======
    }
}              

function calcVetor (){
    let calculaNumeros = [];

    //Estrutura for para preencher um array
    for (let i = 0; i < 10; i++){
        calculaNumeros.push(prompt(`Informe o ${i+1}º número:`));
    }

    let soma = 0; 
    for (let i = 0; i < calculaNumeros.length; i++){
         soma += parseInt(calculaNumeros[i]);
    }

    if (soma % 2 === 0) {
        return alert(`Par`);
    } else {
        if (soma % 2 !== 0){
            return alert(`Ímpar`);
        }
    }
}

>>>>>>> af8eab88ab06cf0008549c4d03a30eb7f2cada26

/* Questão 02

Crie uma função que receba dois números e calcule o primeiro elevado ao segundo

exemplo:
CalculaExpoente(2,2)
saída: 4
CalculaExpoente(5,5)
Saída: 3125

*/
function expoente (n1, n2){
var resultadoexpo = n1 ** n2
console.log(`O resultado é igual a ${resultadoexpo}`)
}
/* Questão 03
Crie uma função que receba um numero e calcule todos os quadrados de todos os números inteiros até ele.
exemplo:
CalculeSomaQuadrado(3) -> 14
Processamento: 1² + 2² + 3² = 14
*/
function somaquadrados (n1){
    var resultado = []
    var soma = 0
    for (var i = 0; i < n1; i++){
           //var total = n1[i] + n1
           resultado = (resultado[i])**2
           soma = soma + resultado [i]
           console.log(`o valor é:  ${soma}`)
    }
}
/* Questão 04
Cria uma função que receba um array e calcule qual a maior sequencia de inteiros que existe nele.
Exemplo:
calculaSequencia([3,4,1,2]) ->2
(3->4) e (1->2)
calculaSequencia([10,11,12,9,10]) -> 3
(10->11->12)
*/
function calculasequencia ([]){

}