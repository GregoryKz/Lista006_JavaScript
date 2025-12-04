function executar() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número:`));
    }

    numeros.sort((a, b) => b - a);

    alert("Números em ordem decrescente:\n" + numeros.join(", "));
}