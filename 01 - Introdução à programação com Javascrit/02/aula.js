

/*

EXERCÍCIO DESENVOLVIDO EM AULA


IF ELSE
function calculaNotaAluno(_notaP1 = 0, _notaP2 = 0, _notaP3 = 0, _notaP4 = 0) {
    var CD = 4
    var media = 7
    var statusAluno = ""

    var soma = _notaP1 + _notaP2 + _notaP3 + _notaP4
    var resultado = soma / CD
    if (resultado >= media) {
        statusAluno = "Aprovado"
    } else {
        statusAluno = "Reprovado"
    }


    return statusAluno

}

SWITCH CASE

var notaP1 = 0
var notaP2 = 0
var notaP3 = 0
var notaP4 = 0
var materia = ""

function calculaNotaSwitch(notaP1, notaP2, notaP3, notaP4, materia) {
    var media = 7 //Media da turma igual a nota 10
    var CD = 4 // Coeficiênte de Divisão;
    var statusAluno = "";

    switch (materia) {
        case "Portugues":
            var soma = notaP1 + notaP4
            var resultado = soma / CD
            if (resultado >= media) {
                statusAluno = "Aprovado"
            } else {
                statusAluno = "Reprovado"
            }
            break;
        case "Matematica":
            var soma = notaP1 + notaP2 + notaP3 + notaP4
            alert(soma)
            var resultado = soma / CD
            if (resultado >= media) {
                statusAluno = "Aprovado"
            } else {
                statusAluno = "Reprovado"
            }
            break;
        case "Geografia":
            var soma = notaP1 + notaP2 + notaP3 + notaP4 * 1.5
            var resultado = soma / CD
            if (resultado >= media) {
                statusAluno = "Aprovado"
            } else {
                statusAluno = "Reprovado"
            }
            break;
    }

    return statusAluno
}


Entrada
    -> float P1 = Receber a nota da P1
    -> float P2 = Receber a nota da P2
    -> float P3 = Receber a nota da P3
    -> float P4 = Receber a nota da P4
    -> int CD = Valor da Divisão será 4
    -> int Media = 7
    -> char NomeAluno = Receber nome do Alunor
    -> char statusAluno = "";
    -> char materia = input.User;

Processamento
    -> CASE materia:
        -> SELECT "Português":
            -> Then
            -> float soma = p1 + p4;
            -> float Resultado = soma/CD.
            -> IF(Resultado >= Media)
                -> Then statusAluno = "Aprovado"
            -> Else
                -> statusAluno = "Reprovado"

        -> SELECT "Matemática":
            ->Then
            -> float soma = p1 + p2 + p3 + p4
            -> float Resultado = soma/CD.
            -> IF(Resultado >= Media)
                -> Then statusAluno = "Aprovado"
            -> Else
                -> statusAluno = "Reprovado"

        -> SELECT "Geográfia":
            ->Then
            -> float soma = p1 + p2 + p3 + p4
            -> float Resultado = soma/CD.

            -> IF(Resultado >= Media)
                -> Then statusAluno = "Aprovado"
            -> Else
                -> statusAluno = "Reprovado"


Saída
    -> Retonar mensagem: "A nota do aluno "%NomeAluno%" teve nota : "%Resultado%" e seu status é : "%statusAluno%". "

*/
