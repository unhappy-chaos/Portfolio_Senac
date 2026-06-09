function tema(evento) {
    const slide = evento.target.checked;

    if (slide) {
        theme_text.innerText = "Modo Claro";
        // definir algo aqui como " return(claro)"

    } else {
        theme_text.innerText = "Modo Escuro";
        // definir algo aqui como "return(dark)"
    }
    // Chamar função responsável pela troca de temas, entregando "claro" ou "escuro"
}

export default tema