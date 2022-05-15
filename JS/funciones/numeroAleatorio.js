function aleatorio(minimo, maximo, decimales = 0) {
    var precision = Math.pow(10, decimales);
    minimo = minimo * precision;
    maximo = maximo * precision;

    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo) / precision;
}