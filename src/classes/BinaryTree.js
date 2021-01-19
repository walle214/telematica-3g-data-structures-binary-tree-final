const parseInPostFija = require('../helpers/in2postFija');
const { operators } = require('../helpers/constants');
const Stack = require('./Stack');
const TreeNode = require('./TreeNode');

module.exports = class BinaryTree {
  constructor(expInFija) {
    this.root = [];
    this.create(parseInPostFija(expInFija));
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
        node.left = this.root.pop();
        node.right = this.root.pop();
        this.root.push(node);
      }
    });
  }
  order() {
    if (this.root.length === 0) return 0;
    const newArray = [[...this.root], [...this.root], [...this.root]];
    console.log('innorder');
    this.inOrder(newArray[0].pop());
    console.log('preorder');
    this.preOrder(newArray[1].pop());
    console.log('postorder');
    this.postOrder(newArray[2].pop());
  }
  inOrder(r) {
    if (r.left != null) this.inOrder(r.left);
    console.log(r.value);
    if (r.right != null) this.inOrder(r.right);
  }

  preOrder(r) {
    console.log(r.value);
    if (r.left != null) this.preOrder(r.left);
    if (r.right != null) this.preOrder(r.right);
  }

  postOrder(r) {
    if (r.left != null) this.preOrder(r.left);
    if (r.right != null) this.preOrder(r.right);
    console.log(r.value);
  }
  print() {
    console.log(this.root);
  }
};
