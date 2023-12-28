const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palavras = text.trim().split(' ');
    return palavras.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textoSemEspacoEPontuacao = text.replace(/[\s.?!,;:]/g, '');
    return textoSemEspacoEPontuacao.length;
  },
   
  getAverageWordLength: (text) => {    
    // Dividindo o texto em palavras usando o espaço como separador
    const palavras = text.split(' ');
    let soma = 0;
    // Para cada palavra, adicionando seu comprimento à soma
    for (let i = 0; i < palavras.length; i++) {
      soma += palavras[i].length;
    }
    return parseFloat((soma / palavras.length).toFixed(2));
    

  },
  getNumberCount: (text) => {
    //TODO: esta função deve retornar quantos números estão no parâmetro `text` do tipo `string`.
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (numeros) {
      return numeros.length; //parseInt(numeros);
    } else {
      return 0;
    } 

  },
  getNumberSum: (text) => {
    //console.log(text)
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);

    if (numeros) {
      let result = 0;
      for (let i = 0; i < numeros.length; i++){
     
      
      
        result += Number(numeros[i]);
        
      
      }

      return result;
    }else{
      return 0;
    }
    //console.log(result)
    
  },
};

export default analyzer;
