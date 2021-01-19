const BinaryTree = require('./classes/BinaryTree');

const exprInfija = process.argv[2];
const tree = new BinaryTree(exprInfija);
tree.print();
console.log('<-------->');
tree.order();
