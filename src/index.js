const BinaryTree = require('./classes/BinaryTree');
const parseInPostFija = require('./helpers/in2postFija');

const exprInfija = process.argv[2];
const tree = new BinaryTree(exprInfija);
// tree.print();
// console.log('<-------->');
console.log('Expresion postfija');
console.log(parseInPostFija(exprInfija).toString());
console.log('<---- In order ---->');
console.log(tree.inOrderString);
console.log('<---- Post order ---->');
console.log(tree.postOrderString);
console.log('<---- Pre order ---->');
console.log(tree.preOrderString);
console.log('<---- Expr result ---->');
console.log(tree.result);
