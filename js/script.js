fuction mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa() {}

function mostraResultado() {
    caixaPerguntas.textContent = `Após tudo isso, ${nome} descobriu que`;
    textResultado
}
