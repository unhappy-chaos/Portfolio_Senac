import traduz from "./translate.js";
import tema from "./color_change.js";
import { sobre, projeto, habilidade } from "./type.js";

const translate = document.getElementById("translate");
translate.addEventListener("click", traduz); // Quando o elemento recebe um click, ele chama a função de tradução, já entregando o evento para dentro da função

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", tema); // Chama a função tema assim que ocorrer um evento de click no elemento

if (document.querySelector("#sobre_mim")) {
    new Typed("#sobre_mim", sobre);
}

if (document.querySelector("#projetos")) {
    new Typed("#projetos", projeto); 
}

if (document.querySelector("#habilidades")) {
    new Typed("#habilidades", habilidade);
}// Primeiro elemento: [ classe ou ID do elemento na onde vai ser escrito o texto ], segundo elemento: [ configurações que você criou ];


