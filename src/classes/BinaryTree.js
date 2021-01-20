const parseInPostFija = require('../helpers/in2postFija');
const { operators } = require('../helpers/constants');
const Stack = require('./Stack');
const TreeNode = require('./TreeNode');

module.exports = class BinaryTree {
  constructor(expInFija) {
    this.root = [];
    this.create(parseInPostFija(expInFija));
    this.preOrder(this.root[0]);
    this.postOrder(this.root[0]);
    this.inOrder(this.root[0]);
    this.resolve(parseInPostFija(expInFija));
  }
  /**
   *
   * @param {Stack} postFijaStack
   * private
   */
  create(postFijaStack) {
    postFijaStack.forEach((value) => {
      if (!operators.includes(value)) this.root.push(new TreeNode(value));
      else {
        const node = new TreeNode(value);
        node.right = this.root.pop();
        node.left = this.root.pop();
        this.root.push(node);
      }
    });
  }
  // order() {
  //   if (this.root.length === 0) return 0;
  //   const newArray1 = [...this.root];
  //   const newArray2 = [...this.root];

  //   console.log('preorder');
  //   console.log(this.preOrder(this.root[0]));
  //   console.log('postorder');
  //   console.log(this.postOrder(this.root[0]));
  // }
  inOrder(r) {
    let string = '';
    const fun = (r) => {
      if (r.left != null) fun(r.left);
      string += r.value;
      if (r.right != null) fun(r.right);
    };
    fun(r);
    // this.resolvePreOrder(string.split('').reverse().join(''));
    this.inOrderString = string;
  }
  preOrder(r) {
    let string = '';
    const fun = (r) => {
      string += r.value;
      if (r.left != null) fun(r.left);
      if (r.right != null) fun(r.right);
    };
    fun(r);
    this.preOrderString = string;
  }
  resolve(exp) {
    const numberStack = new Stack();
    exp.forEach((c) => {
      if (!operators.includes(c)) return numberStack.push(Number(c));
      const n2 = numberStack.pop();
      const n1 = numberStack.pop();
      let res;
      switch (c) {
        case '+':
          res = n1 + n2;
          break;
        case '-':
          res = n1 - n2;
          break;
        case '*':
          res = n1 * n2;
          break;
        case '/':
          res = n1 / n2;
          break;
        case '^':
          res = n1 ** n2;
          break;
        default:
          throw 'Invalid caracter' + c;
          break;
      }
      numberStack.push(res);
    });
    this.result = numberStack.pop();
  }

  postOrder(r) {
    let string = '';
    const fun = (r) => {
      if (r.left != null) fun(r.left);
      if (r.right != null) fun(r.right);
      string += r.value;
    };
    fun(r);
    this.postOrderString = string;
  }
  print() {
    console.log(this.root);
  }
};
