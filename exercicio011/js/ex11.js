function executar() {
    let somaPos = 0;
    let somaNeg = 0;

    for (let i = 0; i < 10; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));

        if (n > 0) somaPos += n;
        else if (n < 0) somaNeg += n;
    }

    alert(
        `Soma dos positivos: ${somaPos}\n` +
        `Soma dos negativos: ${somaNeg}`
    );
}