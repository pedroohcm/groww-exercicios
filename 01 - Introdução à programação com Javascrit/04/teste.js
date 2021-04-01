/*
A Secretaria de Meio Ambiente que controla o índice de
poluição mantém 3 grupos de indústrias que são altamente
poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º
grupo são intimadas a suspenderem suas atividades, se o índice crescer
para 0,4 as industrias do 1º e 2º grupo são intimadas a suspenderem suas
atividades, se o índice atingir 0,5 todos os grupos devem ser notificados a
paralisarem suas atividades. Faça um pseudocódigo que leia o índice de
poluição medido e emita a notificação adequada aos diferentes grupos de empresas.


entrada:
    var ambiental
    mensagemPadrão = ""
    mensagem01 = "Notificar empresas do Grupo 01"
    mensagem02 = "Notifcar empresas do Grupo 01 e Grupo 02"
    mensagem03 = "Notifcar todas as empresas"

processamento:
    se ambiental < 0,3
        entãp
            mensagemPadrão = "Tudo ok"
    se ambiental >= 0,3 E ambiental < 0,4
        então
            mensagemPadrão = mensagem01

    se ambiental >= 0,4 AND ambiental < 0,5
        então
            mensagemPadrão = mensagem02

    else
    //se ambiental >= 0,5
        então
            mensagemPadrão = mensagem03

saída;(Retornar algo para a interface(Usuário, outro sistema...))
    retorne mensagemPadrão.



Uma rainha requisitou os serviços de um monge e disse-lhe que pagaria qualquer preço.
O monge, necessitando de alimentos , indagou à rainha sobre o pagamento,
se poderia ser feito com grãos de trigo dispostos em um tabuleiro de xadrez,
de tal forma que o primeiro quadro deveria conter apenas um grão e os
quadros subsequentes , o dobro do quadro anterior. A rainha achou o
trabalho barato e pediu que o serviço fosse executado, sem sedar conta de que
seria impossível efetuar o pagamento. Faça um algoritmo para calcular o número de
grãos que o monge esperava receber


for(entrada,até!,incrementador)
entrada:

xadrez = 64;
grao = 1

processamento:
for(i = 1; i <= 64; i++){
    if(i == 1){
        grao = 1
    }else{
        grao = grao*2
    }
}
saida:
return grao
*/