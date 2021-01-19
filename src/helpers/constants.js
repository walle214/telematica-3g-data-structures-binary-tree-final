module.exports.priorityData = {
  '(': {
    expPriority: 5,
    stackPriority: 0,
  },
  '+': {
    expPriority: 1,
    stackPriority: 1,
  },
  '-': {
    expPriority: 1,
    stackPriority: 1,
  },
  '*': {
    expPriority: 2,
    stackPriority: 2,
  },
  '/': {
    expPriority: 2,
    stackPriority: 2,
  },
  '^': {
    expPriority: 4,
    stackPriority: 3,
  },
  ')': {
    expPriority: -1,
    stackPriority: -1,
  },
};
module.exports.operators = '(+-*/^)';
module.exports.numbers = '0123456789';
