function traduz(event) {
    const elemento = event.target;

    if (elemento.innerText === "En") {
        elemento.innerText = "Pt-Br";
    } else {
        elemento.innerText = "En";
    }
}

export default traduz