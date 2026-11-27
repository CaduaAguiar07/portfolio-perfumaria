const colecao = [

    // PERFUMARIA ÁRABE

    {
        nome: "Hawas Black",
        marca: "Rasasi",
        categoria: "arabes",
        imagem: "hawas-black.jpeg",
        referencia: "Hacivat — Nishane",
        descricao: "Fragrância cítrica, amadeirada e musgosa."
    },

    {
        nome: "Hawas Kobra",
        marca: "Rasasi",
        categoria: "arabes",
        imagem: "hawas-kobra.jpeg",
        referencia: "Imagination — Louis Vuitton",
        descricao: "Fragrância fresca, cítrica e aromática."
    },

    {
        nome: "Hawas Verde",
        marca: "Rasasi",
        categoria: "arabes",
        imagem: "hawas-verde.jpeg",
        referencia: "Torino21 — Xerjoff",
        descricao: "Fragrância verde, herbal e refrescante."
    },

    {
        nome: "Pacific Aura",
        marca: "Rayhaan",
        categoria: "arabes",
        imagem: "pacific-aura.jpeg",
        referencia: "Pacific Chill — Louis Vuitton",
        descricao: "Fragrância frutada, fresca e vibrante."
    },

    {
        nome: "Italia",
        marca: "Rayhaan",
        categoria: "arabes",
        imagem: "rayhaan-italia.jpeg",
        referencia: "Naxos — Xerjoff",
        descricao: "Fragrância adocicada, aromática e envolvente."
    },

    {
        nome: "Supremacy Collector's Edition",
        marca: "Afnan",
        categoria: "arabes",
        imagem: "supremacy-collectors.jpeg",
        referencia: "Absolu Aventus — Creed",
        descricao: "Fragrância frutada, amadeirada e sofisticada."
    },

    {
        nome: "Jean Lowe Azure",
        marca: "Maison Alhambra",
        categoria: "arabes",
        imagem: "jean-lowe-azure.jpeg",
        referencia: "Afternoon Swim — Louis Vuitton",
        descricao: "Fragrância cítrica, luminosa e refrescante."
    },

    {
        nome: "9 PM Night Out",
        marca: "Afnan",
        categoria: "arabes",
        imagem: "9pm-night-out.jpeg",
        referencia: "Criação autoral",
        descricao: "Fragrância intensa e envolvente, com proposta noturna."
    },

    // PERFUMARIA DESIGNER

    {
        nome: "Blue Temptation",
        marca: "Zara",
        categoria: "designers",
        imagem: "blue-temptation.jpg",
        referencia: "Perfumaria designer",
        descricao: "Uma fragrância versátil da coleção Zara."
    },

    {
        nome: "Vibrant Leather",
        marca: "Zara",
        categoria: "designers",
        imagem: "vibrant-leather.jpg",
        referencia: "Perfumaria designer",
        descricao: "Fragrância cítrica e amadeirada."
    },

    // PERFUMARIA NACIONAL

    {
        nome: "Effervescent",
        marca: "Lab8",
        categoria: "nacionais",
        imagem: "effervecent.jpeg",
        referencia: "Vibrato — Sospiro",
        descricao: "Fragrância cítrica, fresca e especiada."
    },

    {
        nome: "Effervescent Summer",
        marca: "Lab8",
        categoria: "nacionais",
        imagem: "effervecent-summer.jpeg",
        referencia: "God of Fire — Stéphane Humbert Lucas",
        descricao: "Fragrância frutada, tropical e vibrante."
    },

    {
        nome: "Dom 8",
        marca: "Lab8",
        categoria: "nacionais",
        imagem: "dom-8.jpeg",
        referencia: "Dior Homme Intense — Dior",
        descricao: "Fragrância atalcada, floral e amadeirada."
    },

    {
        nome: "Domus",
        marca: "Nuancielo",
        categoria: "nacionais",
        imagem: "domus.jpeg",
        referencia: "Althaïr — Parfums de Marly",
        descricao: "Fragrância adocicada, ambarada e envolvente."
    },

    {
        nome: "Essencial Sentir",
        marca: "Natura",
        categoria: "nacionais",
        imagem: "essencial-sentir.jpeg",
        referencia: "Criação autoral",
        descricao: "Fragrância da perfumaria autoral brasileira."
    }

];

const listaColecao = document.getElementById("lista-colecao");
const contadorColecao = document.getElementById("contador-colecao");
const filtrosColecao = document.querySelectorAll(".filtro");

const nomesCategorias = {
    arabes: "Perfumaria árabe",
    designers: "Perfumaria designer",
    nacionais: "Perfumaria nacional"
};

function exibirColecao(categoria = "todos") {

    const perfumesFiltrados = colecao.filter(function (perfume) {

        return categoria === "todos" ||
               perfume.categoria === categoria;

    });

    listaColecao.innerHTML = perfumesFiltrados.map(function (perfume) {

        return `
            <article class="perfume-card">

                <div class="perfume-imagem">

                    <img
                        src="../images/${perfume.categoria}/${perfume.imagem}"
                        alt="${perfume.nome} da marca ${perfume.marca}"
                        loading="lazy"
                    >

                </div>

                <div class="perfume-info">

                    <span class="perfume-marca">
                        ${perfume.marca}
                    </span>

                    <h3>${perfume.nome}</h3>

                    <p>${perfume.descricao}</p>

                    <div class="referencia-olfativa">

                        <span>REFERÊNCIA OLFATIVA</span>

                        <strong>${perfume.referencia}</strong>

                    </div>

                    <span class="perfil-olfativo">
                        ${nomesCategorias[perfume.categoria]}
                    </span>

                </div>

            </article>
        `;

    }).join("");

    contadorColecao.textContent =
        `Exibindo ${perfumesFiltrados.length} de ${colecao.length} fragrâncias`;

}

filtrosColecao.forEach(function (botao) {

    botao.addEventListener("click", function () {

        filtrosColecao.forEach(function (filtro) {

            filtro.classList.remove("ativo");
            filtro.setAttribute("aria-pressed", "false");

        });

        botao.classList.add("ativo");
        botao.setAttribute("aria-pressed", "true");

        exibirColecao(botao.dataset.categoria);

    });

});

exibirColecao();