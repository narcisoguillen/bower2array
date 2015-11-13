var Path = require('path');
var src  = require('./src');

function load(component, path){
  src.bowerComponents.push(Path.normalize(path));
}

module.exports = load;
