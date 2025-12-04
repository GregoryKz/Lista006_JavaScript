function executar() {
    let contador = 0;

    for (let i = 0; i < 10; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));

        if (n >= 10 && n <= 50) {
            contador++;
        }
    }

    alert(`Quantidade de números entre 10 e 50: ${contador}`);
}