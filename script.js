function receberBencao(){

    // TROCA O FUNDO
    document.body.style.backgroundImage = 'url("fundo2.jpg")';

    // MOSTRA O POPUP
    document.getElementById("popup").style.display = "flex";

    // MENSAGENS
    const mensagens = [
        {
            titulo: "Isaías 41:10",
            texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça."
        },

        {
            titulo: "Mateus 11:28",
            texto: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês" 
        },

        {
            titulo: "Salmos 91:1-2",
            texto: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará. Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei."
        }

    ];

    // ESCOLHE UMA ALEATÓRIA
    const aleatoria = Math.floor(Math.random() * mensagens.length);

    // TROCA O TÍTULO
    document.getElementById("tituloMensagem").innerText = mensagens[aleatoria].titulo;

    // TROCA O TEXTO
    document.getElementById("mensagem").innerText = mensagens[aleatoria].texto;
}

function fecharPopup(){

    // FECHA O POPUP

    document.getElementById("popup").style.display = "none";


    // VOLTA PARA O FUNDO ORIGINAL

    document.body.style.backgroundImage = 'url("fundo1.jpg")';
}