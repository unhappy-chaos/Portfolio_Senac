// import traducao from "./translate.js";
// import tema from "./color_change.js";

const translate = document.getElementById("translate");
const checkbox = document.getElementById("checkbox");

translate.addEventListener("click", (event) => {
    const elemento = event.target;

    if (elemento.innerText === "En") {
        elemento.innerText = "Pt-Br";
        // definir algo aqui como "br"

    } else {
        elemento.innerText = "En";
        // definir algo aqui como "en"
    }
    // Chamar função responsável pela troca de idiomas, entregando "br" ou "en"
});

checkbox.addEventListener("change", (evento) => {
    const slide = evento.target.checked;

    if (slide) {
        theme_text.innerText = "Modo Claro";
        // definir algo aqui como "claro"

    } else {
        theme_text.innerText = "Modo Escuro";
        // definir algo aqui como "escuro"
    }
    // Chamar função responsável pela troca de temas, entregando "claro" ou "escuro"
});

//! Utilização da biblioteca typed.js aqui:
const sobre = {

    strings: ["SOBRE MIM"],

    typeSpeed: 100, // Velocidade da escrita - Quanto menos mais rápido;

    backSpeed: 200, // Velocidade da deletação - Quanto menos mais rápido;

    loop: true, // Se o loop vai acontecer ou não, verdadeiro ou falso para aplicar;

    showCursor: false, // Mostrar ou não o cursor "a barra no final da frase", verdadeiro ou falso para aplicar;
    
    // startDelay: 100, // Delay para começar a escrever o texto - Quanto menos mais rápido;

    // backDelay: 3000, // Delay para começar a deletar o texto após ele ser escrito; - Quanto menos mais rápido;

    // attr: "miau", // https://github.com/mattboldt/typed.js/

    // fadeOut: true, // Ao invés de deletar ele apaga, verdadeiro ou falso para aplicar;

    // fadeOutClass: "typed-fade-out", // Estilo de como vai ser apagado;

    // fadeOutDelay: 500, // Delay em milisegundo para ele começar a ser apagado - Quanto menos mais rápido;

    // loopCount: Infinity, // Quantidade de loops, se houver;

    // cursorChar: "|", // Qual vai ser o caractere do cursor;
};

const projeto = {

    strings: ["PROJETOS"],

    typeSpeed: 100,

    backSpeed: 200,

    loop: true,

    showCursor: false,
};

const habilidade = {

    strings: ["HABILIDADES"],

    typeSpeed: 100,

    backSpeed: 200,

    loop: true,

    showCursor: false,
};

// Como o DOM roda logo assim que o JS é chamado no index.html, as outras páginas não carregaram os elementos de título ainda, portanto abaixo vai trazer um erro no console
document.getElementById("sobre_mim")
document.getElementById("projetos")
document.getElementById("habilidades")

// Para se resolver isso é necessárioo checar se o elemento existe antes de carregar ele e chamar a função, usando apenas o "IF" ele checa se é true, nesse caso, se existe 
if (document.querySelector("#sobre_mim")) {
    new Typed("#sobre_mim", sobre);
}

if (document.querySelector("#projetos")) {
    new Typed("#projetos", projeto);
}

if (document.querySelector("#habilidades")) {
    new Typed("#habilidades", habilidade);
}

// Primeiro elemento: [ classe ou ID do elemento na onde vai ser escrito o texto ], segundo elemento: [ configurações que você criou ];