function executar() {
    let pares = 0;

    for (let i = 0; i < 5; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));
        if (n % 2 === 0) {
            pares++;
        }
    }

    alert("Quantidade de números pares: " + pares);
}