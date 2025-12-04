function executar() {
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número:`));
        soma += n;
    }

    alert("A soma dos números digitados é: " + soma);
}