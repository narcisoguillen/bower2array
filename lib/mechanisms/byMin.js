var _      = require('underscore');
var load   = require('../load');
var config = require('../../config/configuration');

function byMin(component, pkg){
  var found = false;

  _.each(pkg, function(lib){
    if(lib.match(/\.min\.js$/)){
      var path = config.basePath + component + '/' + lib;
      found    = true;

      load(component, path);
    }
  });

  return found;
}

module.exports = byMin;
