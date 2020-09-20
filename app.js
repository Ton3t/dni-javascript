function calculaLetra() {
    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var num = parseInt(prompt("Ingresa DNI:"));

    if(isNaN(num) || num < 0 || num > 99999999) {
        alert("Número erroneo");
    }

    else {
        for(var i = 0; i < letras.length; i++) {
            if(num % 23 == i) {
                alert(num + letras[i]);
            }
        }
    }
}

window.onload = function() {
    this.calculaLetra();
}