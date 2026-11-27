const pesquisa = document.getElementById("pesquisa-glossario");
const termos = document.querySelectorAll(".termo");
const semResultados = document.getElementById("sem-resultados");

function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

pesquisa.addEventListener("input", function () {

    const busca = normalizar(pesquisa.value.trim());
    let encontrados = 0;

    termos.forEach(function (termo) {

        const conteudo = normalizar(termo.textContent);
        const corresponde = conteudo.includes(busca);

        termo.hidden = !corresponde;

        if (corresponde) {
            encontrados++;
        }

    });

    semResultados.hidden = encontrados !== 0;

});