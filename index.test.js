const {translateEng, translateKsw} = require ('swahili-english-translator');

describe ('Swahili-English Translator', () => {
  describe ('translateEng function', () => {
    it ('should translate an English word to Swahili', () => {
      const result = translateEng ('abandon');

      expect (result).toEqual ({
        meaning: ' kuachana',
        type: 'Verb',
        example: {
          eng: 'They decided to abandon the project.',
          ksw: 'Waliamua kuachana na mradi.',
        },
      });
    });

    it ('should handle words not found in the dictionary', () => {
      const result = translateEng ('nonexistentword');

      expect (result).toBeNull ();
    });
  });

  describe ('translateKsw function', () => {
    it ('should translate a Swahili word to English', () => {
      const result = translateKsw ('kuachana');

      expect (result).toEqual ({
        meaning: ' abandon',
        type: 'Verb',
        example: {
          eng: 'They decided to abandon the project.',
          ksw: 'Waliamua kuachana na mradi.',
        },
      });
    });

    it ('should handle words not found in the dictionary', () => {
      const result = translateKsw ('nonexistentword');

      expect (result).toBeNull ();
    });
  });
});
