/* RESPOSTA AQUI 👇 */

/* Questão 01 
Você foi contratado(a) para trabalhar na NBA, a Liga de Basquete Nacional dos Estados Unidos.
Seu trabalho é desenvolver um programa que calcule a quantidade de pontos numa partida. Para isso, 
você deve criar uma função que receba como parametro as cestas de 2 pontos e as cestas de 3 pontos e retorne
a pontuação final do jogo. */

function retornaPontuacao (ponto2, ponto3){
    var result1 = ponto2 *2
    var result2 = ponto3 *3
    var soma = result1 + result2 
    console.log(`O resultado final é : ${soma}`)
}

/* Questão 02

O rei do Poker te convidou para criar um programa para ajuda-lo na sua jogatina. A sua ideia é
que você o ajude criando uma função que embarque a sua lógica para cada jogada.

Antes de realizazr qualquer jogada, o rei do Poker avalia as seguintes condições:
Se eu multiplicar a probablidade de ganhar multiplado pelo prêmio, menos o custo de jogar for positivo,
vale a pena entrar no jogo. Se for negativo, retira a aposta.

Crie uma função que receba a probabilidade, o prêmio e o custo de jogar, e retorne true, caso seja positivo e false caso
seja negativo

exemplo:
prob = 0.2
premio = 50
custo = 9

retonaAposta(0.2,50,9)
//processamento 0.2*50-9
saida : true
*/
function devojogar (prob, premio, custo){
    console.log(`probabilidade deve ser um valor de 0 a 1 ok?`)
    var resposta = (prob*premio) - custo
    var mensagem = ''
    if (resposta >= 0) {
        mensagem = 'Jogue!'}
    else{ 
        mensagem = 'Não Jogue'}
    return mensagem
}


/* Questão 03

Um veiculo precisa 10 vezes o total de combustivel para cada quilômetro que queira percorrer. Crie uma função que receba
a quantidade de quilometros e retorne o total de combustivel. 

Importante: Todo carro deve ter sempre, no mínimo 100 litros de gasolina

exemplo: 
entrada: 
calculaCombustivel(16) = 160
calculaCombustivel(3) = 100
*/
//console.log ('a gasolina está cara, estudo os preços antes!')
//console.log ('por favor insira a distância em Km ok?')
function gastocarro (distancia) {
console.log ('a gasolina está cara, estudo os preços antes!')
console.log ('por favor insira a distância em Km ok?')
var combustivel = distancia * 10
var mensagem = ''
    if (distancia>=10){
    console.log (`A quantidade de combustível é ${combustivel} `)}
    else {
    console.log (`Você deve ter o mínimo de 100L de combustível no carro, mas para essa distância a quantidade de combustível necessária é de ${combustivel}`) }
}



/* Questão 04

Crie uma função que retorne 1, se entrar com 0 e retorne 0 se entrar com um.

Não será permitido o uso de condicionais, como IF ou Switch
 
*/
function retorna1 (n1) {
    console.log('Você deve digitar somente 0 ou 1')
    var resultado = 0
    switch (n1) {
        case "0":
            var resultado = 1
            break;
        case "1":
            var resultado = 0
    return resultado }

}
