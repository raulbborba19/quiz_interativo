import (aleatorio) from './aleatorio.js';
import (perguntas) from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-principal");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    teleInicial.style.display = 'none';
    caixaPerguntas.classList.remove(".mostrar")
    caixaAlternativas.classList.remove(".mostrar")
    caixaResultado.classList.remove(".mostrar")
    mostraPergunta();
}

function mostraPergunta() {
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
    textResultado.textContent = historiaFinal;
    caixaAlternativas.textContent
}
