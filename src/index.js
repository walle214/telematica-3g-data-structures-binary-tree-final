const BinaryTree = require('./classes/BinaryTree');

const exprInfija = process.argv[2];
const tree = new BinaryTree(exprInfija);
// tree.print();
// console.log('<-------->');
console.log('<---- Post order ---->');
console.log(tree.postOrderString);
console.log('<---- Pre order ---->');
console.log(tree.preOrderString);
console.log(tree.preOrderResult);
