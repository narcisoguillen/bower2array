var list = require('./list');
var Path = require('path');

function load(component, path){
  console.log(component, ' --> ', Path.normalize(path));
  list.push(Path.normalize(path));
}

module.exports = load;
