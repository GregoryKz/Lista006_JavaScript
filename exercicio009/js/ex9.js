function executar() {
    let positivos = 0, negativos = 0;

    for (let i = 0; i < 10; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));

        if (n > 0) positivos++;
        else if (n < 0) negativos++;
    }

    alert(
        `Quantidade de positivos: ${positivos}\n` +
        `Quantidade de negativos: ${negativos}`
    );
}