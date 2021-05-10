
var notasAlunosMatriz = [
    ["Alfredo", 10, 08, 10, 10],
    ["Beatriz", 10, 10, 10, 10],
    ["Carlos", 04, 05, 07, 10],
    ["Daniel", 10, 08, 10, 07],
    ["Elaine", 06, 07, 06, 08],
    ["Francine", 10, 09, 10, 10],
    ["Gustavo", 05, 06, 06, 08],
    ["Heitor", 03, 02, 00, 08],
    ["Iago", 07, 03, 08, 07],
    ["Jonathan", 10, 09, 08, 07],
    ["Kyle", 06, 05, 10, 07],
    ["Matheus", 02, 03, 01, 02],
    ["Nair", 10, 08, 09, 07],
    ["Orlando", 05, 07, 04, 06],
    ["Peter", 09, 07, 08, 06],
    ["Queiros", 02, 05, 03, 04],
    ["Raimundo", 06, 05, 08, 09],
    ["Suzana", 10, 09, 10, 09],
    ["Thais", 07, 05, 04, 09],
    ["Ursula", 08, 08, 07, 09],
    ["Victoria", 06, 07, 08, 10],
    ["Xuxa", 06, 07, 07, 06],
    ["Zelda", 10, 10, 10, 10],
    ["Wagner", 02, 03, 03, 06],
    ["Yasmin", 06, 07, 05, 08]
];


function retornaStatusAluno(mediaaluno, mediareprovacao, mediaaprovacao){
    if(mediaaluno >= mediaaprovacao){
        return "Parabéns, aluno aprovado com sucesso"
    }else if(mediaaluno < mediaaprovacao && mediaaluno > mediareprovacao){
        return " Poxa não foi dessa vez que você conseguiu. Agora, sofra estudando para a recuperação"
    }else if(mediaaluno <= mediareprovacao){
        return "Você foi reprovado. Nos vemos de novo no próximo ano. Com amor, profº Matheus"
    }

}
function percorreMatriz(notasAlunosMatriz) {
    var listamedia = []
    var matrizmediaaluno = []
 var ListaMediaAluno = []

    for (var i = 0; i < notasAlunosMatriz.length; i++) {
        
        notasAlunosMatriz[i][5] = ((notasAlunosMatriz[i][1] + notasAlunosMatriz[i][2] + notasAlunosMatriz[i][3] + notasAlunosMatriz[i][4])/4)
        
        var nomeAluno = notasAlunosMatriz[i][0]
    
        matrizmediaaluno.push(nomeAluno, notasAlunosMatriz[i][5])
        listamedia.push(notasAlunosMatriz[i][5])

    } 
        ListaMediaAluno = listamedia.sort(function(a,b){
            return a - b
            });
        
        var posicaonotareprovacoo = Math.trunc(ListaMediaAluno * 0.1) - 1;
        var posicaonotaaprovacao = Math.trunc(ListaMediaAluno * 0.7) - 1;

        var mediareprovacao = ListaMediaAluno[posicaonotareprovacoo];
        var mediaaprovacao = ListaMediaAluno [posicaonotaaprovacao];

        for(var i = 0; i < matrizmediaaluno.length; i++){
            var mediaaluno = matrizmediaaluno[i][1]
            var statusaluno = retornaStatusAluno(mediaaluno, mediareprovacao, mediaaprovacao)
            matrizmediaaluno[i].push(statusaluno);
        } 

    }

