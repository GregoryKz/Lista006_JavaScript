function executar() {
    let positivos = 0;

    for (let i = 0; i < 10; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));
        if (n > 0) positivos++;
    }

    alert("Quantidade de números positivos: " + positivos);
}