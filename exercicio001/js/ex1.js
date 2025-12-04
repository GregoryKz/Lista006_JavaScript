function executar() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número:`));
    }

    let invertido = numeros.reverse();

    alert("Ordem inversa: " + invertido.join(", "));
}