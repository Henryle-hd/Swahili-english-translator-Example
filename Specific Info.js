//First, import the translation functions
const {translateEng, translateKsw} = require ('swahili-english-translator');

// 1. To get only the meaning:

const result1 = translateEng ('abandon');
console.log (result1.meaning); // Output: ' kuachana'

//2. To get the type of word:

const result2 = translateKsw ('uwezo');
console.log (result2.type); // Output: 'Noun'

//3. To get an example:

const result3 = translateEng ('abandon');
console.log (result3.example);

// Output:
// {
//   eng: 'They decided to abandon the project.',
//   ksw: 'Waliamua kuachana na mradi.'
// }
