var _      = require('underscore');
var Path   = require('path');
var load   = require('../load');
var config = require('../../config/configuration');

function byMin(component, pkg){
  var found = false;

  _.each(pkg, function(lib){
    if(lib.match(/\.min\.js$/)){
      found = true;

      load(component, Path.join(config.basePath + '/', component + '/', lib));
    }
  });

  return found;
}

module.exports = byMin;
