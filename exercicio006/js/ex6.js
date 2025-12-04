function executar() {
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número:`));
    }

    numeros.sort((a, b) => a - b);

    alert("Números em ordem crescente:\n" + numeros.join(", "));
}