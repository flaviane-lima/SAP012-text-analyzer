import analyzer from './analyzer.js';

const textarea = document.querySelector("textarea")
const botao = document.getElementById("reset-button")

function atualizaCaracter(){
  document.querySelector("li[data-testid='word-count']").textContent="Palavras: " + analyzer.getWordCount(textarea.value)
  document.querySelector("li[data-testid='character-count']").textContent="Caracteres: " + analyzer.getCharacterCount(textarea.value)
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent="Caracteres sem espaço: " + analyzer.getCharacterCountExcludingSpaces(textarea.value)
  document.querySelector("li[data-testid='number-count']").textContent="Numeros: " + analyzer.getNumberCount(textarea.value)
  document.querySelector("li[data-testid='number-sum']").textContent="Soma numeros: " + analyzer.getNumberSum(textarea.value)
  document.querySelector("li[data-testid='word-length-average']").textContent="Comprimento das palavras: " + analyzer.getAverageWordLength(textarea.value)
}     

textarea.addEventListener('input',atualizaCaracter);//está pegando o input...

botao.addEventListener('click',() => {
  textarea.value='';
  atualizaCaracter();
})


