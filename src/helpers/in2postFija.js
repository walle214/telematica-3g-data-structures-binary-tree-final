// * reference infija2postfija https://www.youtube.com/watch?v=d7UZdz_yGXQ
const Stack = require('../classes/Stack.js');
const { priorityData, operators, numbers } = require('./constants.js');

const parseInPostFija = (exp) => {
  const postFija = new Stack();
  const pila = new Stack();
  const caracteres = exp.split('');
  caracteres.forEach((c) => {
    if (!(operators.includes(c) || numbers.includes(c)))
      throw new Error('Caracter no validos ' + c);
  });
  caracteres.forEach((c) => {
    // * Numero se agregan directamenta a la expresion postfija
    if (numbers.includes(c)) return postFija.push(c);
    if (operators.includes(c)) {
      // * Si la pila de operadores está vacía el operador se agrega directamente
      if (pila.empty) {
        pila.push(c);
      } else {
        // * Si el operador es un parentesís de cierre se sacan todos los operaodres hasta el parentesís de apertura y se agregan a la expresion postfija
        if (c === ')') {
          while (pila.peek() !== '(') postFija.push(pila.pop());
          // * Se elimina el operador de apertura
          return pila.pop();
        }
        // * Mientras la pila no esté vacía y la prioridad del operaodr en la expresion infija no sea mayor a la prioridad del operador en la pila se sacarán todos los operadores y se agregarán a la expresión postfija
        while (
          !pila.empty &&
          priorityData[c].expPriority <= priorityData[pila.peek()].stackPriority
        )
          postFija.push(pila.pop());
        // * Se agrega el operador actual a la pila
        pila.push(c);
      }
    }
  });
  // * Se limpia la pila de operadores y se agregan a la expresión infija
  while (!pila.empty) postFija.push(pila.pop());
  return postFija;
};
module.exports = parseInPostFija;
