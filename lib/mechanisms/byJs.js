var _      = require('underscore');
var Path   = require('path');
var load   = require('../load');
var config = require('../../config/configuration');

function byJs(component, pkg, basePath){
  var found = false;
  (basePath) || (basePath = config.basePath);

  _.each(pkg, function(lib){
    if(lib.match(/\.js$/) && !_.contains(config.ignore, lib)){
      var path = Path.join(basePath +'/', component + '/', lib);
      found    = true;

      load(component, path);
    }
  });

  return found;
}

module.exports = byJs;
