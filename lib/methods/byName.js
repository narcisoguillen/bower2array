var _      = require('underscore');
var Path   = require('path');
var Path   = require('path');
var load   = require('../load');
var config = require('../../config/configuration');

function byName(component, pkg, basePath){
  var found = false;
  (basePath) || (basePath = config.basePath);

  _.each(pkg, function(lib){
    if(!lib.match(/\.js$/)){ return true; } // Skip
    if(lib.match(component.toLowerCase())){
      found = true;

      load(component, Path.join(basePath + '/', component + '/', lib));
    }
  });

  return found;
}

module.exports = byName;
