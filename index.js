const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const specialCases = {
  oo: "OO",
  api: "API",
  nan: "NaN",
  stoppropagation: "StopPropagation",
  preventdefault: "PreventDefault",
  jsonp: "JSONP"
};

const titleCased = () => {
  return tutorials.map(title => {
    return title
      .split(' ')
      .map(word => {
        // strip punctuation from the end, keep it aside
        const punctuation = word.match(/[^a-zA-Z]*$/)[0] || '';
        const coreWord = word.slice(0, word.length - punctuation.length);

        const lower = coreWord.toLowerCase();

        if (specialCases.hasOwnProperty(lower)) {
          return specialCases[lower] + punctuation;
        } else {
          return coreWord.charAt(0).toUpperCase() + coreWord.slice(1).toLowerCase() + punctuation;
        }
      })
      .join(' ');
  });
};
