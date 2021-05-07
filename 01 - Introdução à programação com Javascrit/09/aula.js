/* Aula 09 - Estrutura de Dados 

Estrutura de dados = Organização de dados


Array = Vector e uma Matriz
-> Index
array = ["thiago", "guedes"]
array[0] = "thiago";
*/

var semana = ["segunda", "terça", "quarta", "quinta", "sexta"] //Vector

var usuarios =[
    ["Thiago", "guedes", "25"],
    ["Matheus", "Acc", "22"],
    ["Victória", "Dude",["banana", "pão"]]
]

/* Pilha(Estrutura de dados)
    É estrutura de Dados que funciona como coleção de ordenando 
    LAST IN, FIRST OUT(LIFO)
*/

class Pilha {
    constructor(){  
        this.elementos = []
    }
    inserir(elementos){
        this.elementos.push(elementos)
        console.log(elementos)
    }
    tirar(){
        this.elementos.pop()
        console.log(this.elementos)
    }
}
/* Fila(Estrutura de dados)
    FIRST IN, FIRST OUT(FIFO)
*/

class Fila {
    constructor(){  
        this.elementos = []
    }
    inserir(elementos){
        this.elementos.push(elementos)
        //console.log(elementos)
    }
    tirar(){
        this.elementos.shift()
        //console.log(this.elementos)
    }
}


/* Árvore 
    Não ordenado de item, abstração
*/


