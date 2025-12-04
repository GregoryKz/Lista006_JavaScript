function executar() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número:`));
    }

    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    alert(`Maior número: ${maior}\nMenor número: ${menor}`);
}