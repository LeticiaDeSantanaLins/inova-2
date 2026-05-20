function receberBencao(){

    // TROCA O FUNDO
    document.body.style.backgroundImage = 'url("fundo2.jpg")';

    // MOSTRA O POPUP
    document.getElementById("popup").style.display = "flex";

    // LISTA DE MENSAGENS
    const mensagens = [
        "Você merece paz.",
        "Seu coração é mais forte do que o medo.",
        "A esperança ainda caminha com você.",
        "Grandes coisas florescem lentamente.",
        "A luz não abandonou você."
    ];

    // ESCOLHE UMA ALEATÓRIA
    const aleatoria = Math.floor(Math.random() * mensagens.length);

    // TROCA O TEXTO
    document.getElementById("mensagem").innerText = mensagens[aleatoria];
}