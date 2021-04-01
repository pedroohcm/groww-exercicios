function calculaGrao() {
    var grao = 0

    for (var i = 1; i <= 64; i++) {
        if (i == 1) {
            grao = 1
        } else {
            grao = grao * 2
        }
    }

    return grao
}



