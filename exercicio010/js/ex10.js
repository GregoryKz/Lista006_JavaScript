function executar() {
    let existeZero = false;

    for (let i = 0; i < 5; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));

        if (n === 0) {
            existeZero = true;
        }
    }

    if (existeZero) {
        alert("Existe pelo menos um número igual a ZERO.");
    } else {
        alert("Nenhum número digitado é ZERO.");
    }
}