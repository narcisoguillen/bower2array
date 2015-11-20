var Path         = require('path');
var src          = require('./src');
var dependencies = require('./dependencies');

function load(component, path){
  dependencies.prepend(component);
  src.bowerComponents.push(Path.normalize(path));
}

module.exports = load;
