function node(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

node.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

node.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

function isSuperBalanced(root) {
  var answer = isOneApart(root, 0);

  return answer !== null;
}

function isOneApart(node, depth) {
  if (!node.left && !node.right) return depth;

  var firstDepth = secondDepth = null;
  if (node.left) firstDepth = isOneApart(node.left, depth + 1);
  if (node.right) secondDepth = isOneApart(node.right, depth + 1);


  if (!firstDepth || !secondDepth) return firstDepth || secondDepth;

  if (Math.abs(firstDepth - secondDepth) > 1) return null;
  else {
    return Math.max(firstDepth, secondDepth);    
  }
}

var root = new node(1);

root.left = new node(2);
var left1 = root.left;

root.right = new node(2);
var right1 = root.right;

right1.right = new node(2);
var rightright = right1.right;

rightright.right = new node(3);
var rightrightright = rightright.right;

rightright.left = new node(3);
var rightrightleft = rightright.right;

right1.left = new node(2);
var rightleft = right1.left;

left1.left = new node(2);
var leftleft = left1.left;

left1.right = new node(2);
var leftright = left1.right;

leftleft.left = new node(2);
var leftleftleft = leftleft.left;

console.log(isSuperBalanced(root))
