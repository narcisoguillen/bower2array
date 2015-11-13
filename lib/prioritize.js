var src = require('./src');
var _   = require('underscore');

// Set top level list
module.exports.set = function(topLevel){
  src.topLevel = topLevel;
};

// Prioritize
module.exports.reOrder = function(){
  _.each(src.topLevel, function(important, index){

    var current = src.components.indexOf(important);
    if(current === -1){ return true }; // Skip

    var replace = src.components[index];
    src.components[index]   = important;
    src.components[current] = replace;
  });
};
