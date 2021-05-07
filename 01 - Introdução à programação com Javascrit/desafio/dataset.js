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
function percorreMatriz(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        for (var m = 1; m < matriz[i].length; m++) {
            console.log(matriz[i][m])
        }
    }
}
var notasAlunosJSON = {
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
    },
}
/*for (var i = 0; i < 4; i++) {
var soma01 = 0
soma01 = notasAlunosJSON [i] + soma01
var media01 = soma01 / 4
console.log(media01)
}*/
function mediaaluno (notasAlunosJSON) {
    for (var [key, value] of Object.entries(notasAlunosJSON)){
        for(var [keyNota, valueNota] of Object.entries(value.notas)){            
            console.log(keyNota)
            console.log(valueNota)
        }        
    }
}