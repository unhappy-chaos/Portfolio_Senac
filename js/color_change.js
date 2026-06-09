const checkbox = document.getElementById("checkbox");

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