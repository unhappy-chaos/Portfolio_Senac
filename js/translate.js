const translate = document.getElementById("translate");

translate.addEventListener("click", (traduz) => { //Colocar o event listen para ocorrer no main e ativar a tradução
    const elemento = traduz.target;

if (elemento.innerText === "En") {
        console.log(elemento);
        elemento.innerText = "Pt-Br";
        // definir algo aqui como "br"

} else {
        elemento.innerText = "En";
        // definir algo aqui como "en"
}
// Chamar função responsável pela troca de idiomas, entregando "br" ou "en"
});