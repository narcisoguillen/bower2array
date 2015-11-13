var _      = require('underscore');
var load   = require('../load');
var config = require('../../config/configuration');

function byName(component, pkg){
  var found = false;

  _.each(pkg, function(lib){
    if(!lib.match(/\.js$/)){ return true; }
    if(lib.match(component.toLowerCase())){
      var path = config.basePath + component + '/' + lib;
      found    = true;

      load(component, path);
    }
  });

  return found;
}

module.exports = byName;
