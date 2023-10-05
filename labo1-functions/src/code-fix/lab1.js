// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Not a number');
    }
    return a + b;
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    const double = (c) => {
      return c * 2;
    };

    return array.map(double);
  },

  checkForBadWords(input) {
    let grosMot = ['merde', 'putain'];
    grosMot.forEach((elt) => {
      if (input.includes(elt)) {
        throw new Error('Gros Mot');
      }
    });

    // const test = grosMot.some((mot)=>input.includes(mot));

    // if(test){
    //   throw new Error ("Gros Mot");
    // }
  },

  nameOfWeekDay(index) {
    const jours = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    return jours[index];
  },

  sortNumbers(array) {
    array.sort((e, f) => e - f);
    return array;
  },

  createCounterFunction(input) {
    return () => {
      // input++; -> retourne ancienne valeur de input
      // ++input; -> retourne nouvelle valeur de input
      return ++input;
    };
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    const message = `Hello ${name}. Are you well?`;
    return message;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
    callback(1, 2);
    return null;
  },

  combineArrays(array1, array2) {
    const array3 = array1.concat(array2);
    return array3;
  },

  promiseMeMoney() {
    //Docs : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise
    const promise = new Promise((resolve, _) => {
      setTimeout(() => {
        resolve('send message');
      }, 100);
    });

    return promise.then((value) => value);
  },
};

module.exports = functions;
