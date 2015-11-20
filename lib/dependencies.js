/*
 * Prepend dependencies for components
 * */

var src = require('./src');
var _   = require('underscore');

// Set dependencies
module.exports.set = function(dependencies){
  src.dependencies = dependencies;
};

// Prepend the dependencies for a component
module.exports.prepend = function(component){
  if(!src.dependencies[component]){ return false; }

  _.each(src.dependencies[component], function(dependencie){
    src.bowerComponents.push(dependencie);
  });

};
