const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palavras=text.split(' ');
    return palavras.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textoSemEspacoEPontuacao = text.replace(/[^\w]/g,'');
    const contagemDeCaracteres = textoSemEspacoEPontuacao.length;
    return contagemDeCaracteres;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palavras =  analyzer.getWordCount(text);
    const caracteresSemEspaco = analyzer.getCharacterCountExcludingSpaces(text);
    const mediaComprimento = caracteresSemEspaco/palavras; 
    const total = mediaComprimento.toFixed(2);
    return total;    
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numeros = text.match(/[s.?!,;:]/g,'');
    if (numeros) {
      return parseInt(numeros);
    } else {
      return 0;
    } 

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let result = 0;

    for (let i = 0; i < text.length; i++){
      const numeros = text.match(/[s.?!,;:]/g,'');
      if (numeros) {
        result = numeros + numeros;
        return result;
      } else {
        return 0;
      }

    }
  },
};

export default analyzer;
