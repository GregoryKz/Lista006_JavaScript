function executar() {
    let pares = [];

    for (let i = 0; i < 7; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));

        if (n % 2 === 0) {
            pares.push(n);
        }
    }

    if (pares.length === 0) {
        alert("Nenhum número par foi digitado.");
    } else {
        alert("Números pares digitados:\n" + pares.join(", "));
    }
}