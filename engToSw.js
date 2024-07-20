//First, import the translation functions:
const {translateEng, translateKsw} = require ('swahili-english-translator');

//To translate an English word to Swahili
const result = translateEng ('abandon');
console.log (result);

/*
OUTPUT:
{
  meaning: ' kuachana',
  type: 'Verb',
  example: {
    eng: 'They decided to abandon the project.',
    ksw: 'Waliamua kuachana na mradi.',
  }
}

*/
