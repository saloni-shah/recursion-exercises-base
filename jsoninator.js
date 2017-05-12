const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const isArrayLike = function(obj) {
  const length = obj['length'];
  return typeof length === 'number' && length >= 0;
};

const quoteForString = function(string) {
  return  '"' + string + '"';
}

const each = function(obj, callback=identity) {
  if(isArrayLike(obj)){
    for(let index=0; index < obj.length; index++){
      callback(obj[index], index, obj);
    }
  } else {
    for(let key in obj){
      callback(obj[key], key, obj);
    }
  }
};

const map = function(obj, callback=identity) {
  const results = [];
  each(obj, (value, key, obj) => {
    results.push(callback(value, key, obj));
  });
  return results;
};


const stringifyForObject = function(obj){
  if(obj === null) { 
    return 'null'; 
  } else {
    if (isArrayLike(obj)){
      if(obj.length === 0){
        return '[]';
      }else{
        let arr = map(obj, stringify);
        return '[' + arr.join(',') + ']';
      }
    } else {
      let targetObj = "{";
      for(let key in obj){
        targetObj += quoteForString(key) + ":" + stringify(obj[key]);
      }
      targetObj += "}";
      return targetObj;
    }
  }
}


const stringify = function(obj) {
  // your code goes here
  switch(typeof obj){
    case 'string':
      return quoteForString(obj);

    case 'number':
      return Number.isFinite(obj) ? String(obj) : obj;

    case 'boolean':
      return String(obj);

    case 'object':
      return stringifyForObject(obj);
  }
};

module.exports = {
  stringify: stringify
};