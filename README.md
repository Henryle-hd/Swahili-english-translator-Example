
### swahili-english-translator
```
https://github.com/Henryle-hd/swahili-english-translator.git 

```

[swahili-english-translator](https://github.com/Henryle-hd/swahili-english-translator.git)

### install package

```
npm install swahili-english-translator

```

## Examples 🚀

First, import the translation functions:

```
const { translateEng, translateKsw } = require('swahili-english-translator');
```

### Translating English to Swahili 🇬🇧🇹🇿

To translate an English word to Swahili:

```
const result = translateEng('abandon');
console.log(result);
```

Output: [Example 01](https://github.com/Henryle-hd/Swahili-english-translator-Example/blob/main/engToSw.js)

```
{
  meaning: ' kuachana',
  type: 'Verb',
  example: {
    eng: 'They decided to abandon the project.',
    ksw: 'Waliamua kuachana na mradi.',
  }
}
```

### Translating Swahili to English 🇹🇿🇬🇧

To translate a Swahili word to English:

```
const result = translateKsw('uwezo');
console.log(result);
```

Output: [Example 02](https://github.com/Henryle-hd/Swahili-english-translator-Example/blob/main/swToEng.js)

```
{
  meaning: ' ability',
  type: 'Noun',
  example: {
    eng: 'She has the ability to solve complex problems.',
    ksw: 'Ana uwezo wa kutatua matatizo magumu.',
  }
}
```

### Getting Specific Information 🔍

1. To get only the meaning:
   ```
   const result = translateEng('abandon');
   console.log(result.meaning); // Output: ' kuachana'
   ```

2. To get the type of word:
   ```
   const result = translateKsw('uwezo');
   console.log(result.type); // Output: 'Noun'
   ```

3. To get an example:
   ```
   const result = translateEng('abandon');
   console.log(result.example);

   // Output:
   // {
   //   eng: 'They decided to abandon the project.',
   //   ksw: 'Waliamua kuachana na mradi.'
   // }
   ```
   [Example 03](https://github.com/Henryle-hd/Swahili-english-translator-Example/blob/main/Specific%20Info.js)


