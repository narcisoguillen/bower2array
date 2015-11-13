var _      = require('underscore');
var Path   = require('path');
var load   = require('../load');
var config = require('../../config/configuration');

function byName(component, pkg, basePath){
  var found = false;
  (basePath) || (basePath = config.basePath);

  _.each(pkg, function(lib){
    if(!lib.match(/\.js$/)){ return true; }
    if(lib.match(component.toLowerCase())){
      var path = Path.join(basePath + '/', component + '/', lib);
      found    = true;

      load(component, path);
    }
  });

  return found;
}

module.exports = byName;
