
let perguntaElement = document.getElementById("pergunta");
let resultadoElement = document.getElementById("resultado");
let respostaSim = document.getElementById("resposta-sim");
let respostaNao = document.getElementById("resposta-nao");
let informacao = document.getElementById("informacaos-tema");
let perguntaAtual = 0; // Variável para armazenar o índice da pergunta atual
let pergunta = "";
 

function iniciarQuiz() {
    perguntaAtual = Math.floor(Math.random() * perguntas.length);
    perguntaElement.textContent = perguntas[perguntaAtual].pergunta;
    respostaSim.checked = false; // Limpa o checkbox "Sim"
    respostaNao.checked = false; // Limpa o checkbox "Não"
    resultadoElement.textContent = ""; // Limpa o feedback

}

// Função para verificar a resposta
function verificarResposta() {
    // Verifica se o checkbox "Sim" está selecionado
    let respostaUsuario = respostaSim.checked;
    let respostaCorreta = pergunta.resposta;

    pergunta = perguntas[perguntaAtual]

    if (respostaUsuario === respostaCorreta) {
        resultadoElement.textContent = "Parabéns! Você acertou!";
    } else {
        resultadoElement.textContent = "Que pena! A resposta correta é: " + (respostaCorreta ? "Sim" : "Não");        
        
        informacao.innerHTML = `
         <section class="informacaos-tema">
                <div id="informacaos-tema">
                   <p> ${pergunta.informacao}</p>
                </div>
            </section>
            `
    }
}

// Adiciona event listeners para os checkboxes
respostaSim.addEventListener('change', () => {
    if (respostaSim.checked) {
        verificarResposta();
        respostaNao.checked = false; // Desmarca o checkbox "Não"
    }
});

respostaNao.addEventListener('change', () => {
    if (respostaNao.checked) {
        verificarResposta();
        respostaSim.checked = false; // Desmarca o checkbox "Sim"
    }
});

function proximaPergunta() {
    informacao.innerHTML = "";
    iniciarQuiz();
}

// Inicia o quiz ao carregar a página
document.addEventListener("DOMContentLoaded", iniciarQuiz);