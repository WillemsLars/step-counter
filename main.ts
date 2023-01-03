let rendom_numer = 0
input.onButtonPressed(Button.A, function () {
    rendom_numer = randint(1, 6)
    if (rendom_numer == 1) {
        basic.showString("OMTER EERST EEN BOTLE FLIP")
    } else if (rendom_numer == 2) {
        basic.showString("PING PONG SCHOT")
    } else if (rendom_numer == 3) {
        basic.showString("IN DE BUL GOJEN")
    } else if (rendom_numer == 4) {
        basic.showString("OMTER EERST 6 GOOIEN")
    } else if (rendom_numer == 5) {
        basic.showString("BALON WETSTRIJD")
    } else if (rendom_numer == 6) {
        basic.showString("DRINK OMTER EERST EEN BEKER UIT")
    }
})
