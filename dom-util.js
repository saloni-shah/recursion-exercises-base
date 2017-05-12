
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  if (node.childNodes) {
    callback(node);
    node.childNodes.forEach( (value) => visitAllNodes(value,callback));
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  let nodesArr = [];
  visitAllNodes(node, (currentNode) => nodesArr.push(currentNode));
  return nodesArr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};