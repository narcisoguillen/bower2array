var _      = require('underscore');
var load   = require('../load');
var config = require('../../config/configuration');

function byJs(component, pkg){
  var found = false;

  _.each(pkg, function(lib){
    if(lib.match(/\.js$/) && !_.contains(config.ignore, lib)){
      var path = config.basePath + component + '/' + lib;
      found    = true;

      load(component, path);
    }
  });

  return found;
}

module.exports = byJs;
