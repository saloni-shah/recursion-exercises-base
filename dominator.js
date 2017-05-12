const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  // Your code here
  let nodesArr = flattenTreeToArray(root);
  for(let i = 0; i < nodesArr.length; i++){
    if(nodesArr[i].nodeName !== '#text'){
      if(nodesArr[i].id === id){
        return nodesArr[i];
      }
    }
  }
  
};

const getElementsByClassName = function(root, className) {
  // Your code here
  let nodesArr = flattenTreeToArray(root);
  let classElems = [];
  for(let i = 0; i < nodesArr.length; i++){
    if(nodesArr[i].nodeName !== '#text'){
      if(nodesArr[i].className!==undefined && nodesArr[i].className.indexOf(className) !== -1){
        classElems.push(nodesArr[i]);
      }
    }
  }
  return classElems;
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  let nodesArr = flattenTreeToArray(root);
  let tagElems = [];
  for(let i = 0; i < nodesArr.length; i++){
    if(nodesArr[i].nodeName !== '#text'){
      if(nodesArr[i].nodeName === tagName){
        tagElems.push(nodesArr[i]);
      }
    }
  }
  return tagElems;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
