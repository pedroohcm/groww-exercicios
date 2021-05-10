

//>>>>>>> af8eab88ab06cf0008549c4d03a30eb7f2cada26
/* var notasAlunosJSON = {
    01: {
        "nome": "Alfredo",
        "notas": {
            nota01: 10,
            nota02: 08,
            nota03: 10,
            nota04: 10
        }
    },
    02: {
        "nome": "Beatriz",
        "notas": {
            nota01: 07,
            nota02: 06,
            nota03: 08,
            nota04: 07
        }
    },
    03: {
        "nome": "Carlos",
        "notas": {
            nota01: 04,
            nota02: 05,
            nota03: 07,
            nota04: 10
        }
    },
    04: {
        "nome": "Daniel",
        "notas": {
            nota01: 10,
            nota02: 08,
            nota03: 10,
            nota04: 07
        }
    },
    05: {
        "nome": "Elaine",
        "notas": {
            nota01: 06,
            nota02: 07,
            nota03: 06,
            nota04: 08
        }
    },
    06: {
        "nome": "Francine",
        "notas": {
            nota01: 10,
            nota02: 09,
            nota03: 10,
            nota04: 10
        }
    },
    07: {
        "nome": "Gustavo",
        "notas": {
            nota01: 05,
            nota02: 06,
            nota03: 06,
            nota04: 08
        }
    },
    08: {
        "nome": "Heitor",
        "notas": {
            nota01: 03,
            nota02: 02,
            nota03: 00,
            nota04: 08
        }
    },
    09: {
        "nome": "Iago",
        "notas": {
            nota01: 07,
            nota02: 03,
            nota03: 08,
            nota04: 07
        }
    },
    10: {
        "nome": "Jonathan",
        "notas": {
            nota01: 10,
            nota02: 09,
            nota03: 08,
            nota04: 07
        }
    },
    11: {
        "nome": "Kyle",
        "notas": {
            nota01: 06,
            nota02: 05,
            nota03: 10,
            nota04: 07
        }
    },
    12: {
        "nome": "Matheus",
        "notas": {
            nota01: 02,
            nota02: 03,
            nota03: 01,
            nota04: 02
        }
    },
    13: {
        "nome": "Nair",
        "notas": {
            nota01: 10,
            nota02: 08,
            nota03: 09,
            nota04: 07
        }
    },
    14: {
        "nome": "Orlando",
        "notas": {
            nota01: 05,
            nota02: 07,
            nota03: 04,
            nota04: 06
        }
    },
    15: {
        "nome": "Peter",
        "notas": {
            nota01: 09,
            nota02: 07,
            nota03: 08,
            nota04: 06
        }
    },
    16: {
        "nome": "Queiros",
        "notas": {
            nota01: 02,
            nota02: 05,
            nota03: 03,
            nota04: 04
        }
    },
    17: {
        "nome": "Raimundo",
        "notas": {
            nota01: 06,
            nota02: 05,
            nota03: 08,
            nota04: 09
        }
    },
    18: {
        "nome": "Suzana",
        "notas": {
            nota01: 10,
            nota02: 09,
            nota03: 10,
            nota04: 09
        }
    },
    20: {
        "nome": "Thais",
        "notas": {
            nota01: 07,
            nota02: 05,
            nota03: 04,
            nota04: 09
        }
    },
    21: {
        "nome": "Ursula",
        "notas": {
            nota01: 08,
            nota02: 08,
            nota03: 07,
            nota04: 09
        }
    },
    22: {
        "nome": "Victoria",
        "notas": {
            nota01: 06,
            nota02: 07,
            nota03: 08,
            nota04: 10
      }
  },
    23: {
        "nome": "Xuxa",
        "notas": {
            nota01: 06,
            nota02: 07,
            nota03: 07,
            nota04: 06
        }
    },
    24: {
        "nome": "Zelda",
        "notas": {
            nota01: 10,
            nota02: 10,
            nota03: 10,
            nota04: 10
        }
    },
    25: {
        "nome": "Wagner",
        "notas": {
            nota01: 02,
            nota02: 03,
            nota03: 03,
            nota04: 06
        }
    },
    26: {
        "nome": "Yasmin",
        "notas": {
            nota01: 06,
            nota02: 07,
            nota03: 05,
            nota04: 08,
        }
<<<<<<< HEAD
    },   
}
    function chamada(names) {
    var listanome = ["Alfredo", "Beatriz", "Carlos", "Daniel", "Elaine", "Francine", "Gustavo","Heitor","Iago","Jonathan","Kyle","Matheus","Nair", "Orlando","Peter","Queiros","Raimundo","Suzana","Thais","Ursula","Victoria","Xuxa","Zelda","Wagner","Yasmin"];

    for (var i = 0; i < listanome.length; i++) {
        var alunoinscrito = listanome[i]
        if (alunoinscrito == nome) {
            console.log(i)
        } else {
            console.log(alunoinscrito)
        }
    }


}
    function mediaaluno (names){
        for (var [key,value] of Object.entries(notasAlunosJSON.nome)){
           if(value.nome===names){
            return value.notas
           }
        }
    }

=======
    },
}
for (var i = 0; i < 4; i++) {
var soma01 = 0
soma01 = notasAlunosJSON [i] + soma01
var media01 = soma01 / 4
console.log(media01)
}
function mediaaluno (notasAlunosJSON) {
    for (var [key, value] of Object.entries(notasAlunosJSON)){
        var notas = value.notas
        var total = Object.values(notas).reduce((a, b) => a + b, 0)/Object.values(notas).length
        notasAlunosJSON[key]["media"] = total        
        
    console.log(notasAlunosJSON)
     //for (var i=0; i < notasAlunosJSON.Object.values(notas).length; i++){
        //var notasAlunosJSONG1 = [notasAlunosJSON.Object.values(total)]
        //console.log(`as medias sao ${notasAlunosJSONG1}`) */