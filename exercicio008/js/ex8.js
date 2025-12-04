function executar() {
    let somaPares = 0, somaImpares = 0;
    let qtdPares = 0, qtdImpares = 0;

    for (let i = 0; i < 5; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));

        if (n % 2 === 0) {
            somaPares += n;
            qtdPares++;
        } else {
            somaImpares += n;
            qtdImpares++;
        }
    }

    let mediaPares = qtdPares > 0 ? somaPares / qtdPares : 0;
    let mediaImpares = qtdImpares > 0 ? somaImpares / qtdImpares : 0;

    alert(
        `Média dos pares: ${mediaPares.toFixed(2)}\n` +
        `Média dos ímpares: ${mediaImpares.toFixed(2)}`
    );
}