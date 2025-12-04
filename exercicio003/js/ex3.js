function executar() {
    let soma = 0;

    for (let i = 0; i < 7; i++) {
        soma += parseInt(prompt(`Digite o ${i + 1}º número:`));
    }

    let media = soma / 7;
    alert("A média é: " + media.toFixed(2));
}