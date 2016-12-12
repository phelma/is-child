'use strict';
let path = require('path');
let isEqual = require('lodash.isequal');
let sep = path.sep;

module.exports = (parent, child) => {
  parent = parent.split(sep);
  child = child.split(sep);

  let plength = parent.length;
  let clength = child.length;

  if (clength <= plength){
    return false;
  }
  return (isEqual(child.slice(0, parent.length), parent));
};
