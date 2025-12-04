function executar() {
    let nomes = [];

    for (let i = 0; i < 5; i++) {
        nomes[i] = prompt(`Digite o ${i + 1}º nome:`).trim();
    }

    nomes.sort((a, b) => a.localeCompare(b));

    alert("Nomes em ordem alfabética:\n" + nomes.join("\n"));
}