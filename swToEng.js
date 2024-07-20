// First, import the translation functions:
const {translateEng, translateKsw} = require ('swahili-english-translator');

// To translate a Swahili word to English
const result = translateKsw ('uwezo');
console.log (result);

/*
OUTPUT:
{
  meaning: ' ability',
  type: 'Noun',
  example: {
    eng: 'She has the ability to solve complex problems.',
    ksw: 'Ana uwezo wa kutatua matatizo magumu.',
  }
}

*/
