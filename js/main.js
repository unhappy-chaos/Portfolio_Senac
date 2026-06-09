// import traducao from "./translate.js";
// import tema from "./color_change.js";

//! Utilização da biblioteca typed.js aqui:
const sobre = {

    strings: ["SOBRE MIM"],

    typeSpeed: 100, // Velocidade da escrita - Quanto menos mais rápido;

    backSpeed: 250, // Velocidade da deletação - Quanto menos mais rápido;

    // loop: true, // Se o loop vai acontecer ou não, verdadeiro ou falso para aplicar;

    showCursor: false,
};

const projeto = {

    strings: ["PROJETOS"],

    typeSpeed: 100,

    backSpeed: 250,

    // loop: true,

    showCursor: false,
};

const habilidade = {

    strings: ["HABILIDADES"],

    typeSpeed: 100,

    backSpeed: 250,

    // loop: true,

    showCursor: false,
};

// Como o DOM roda logo assim que o JS é chamado no index.html, as outras páginas não carregaram os elementos de título ainda, portanto o código abaixo vai trazer um erro no console
// document.getElementById("sobre_mim")
// document.getElementById("projetos")
// document.getElementById("habilidades")

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