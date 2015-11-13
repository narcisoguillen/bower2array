var _      = require('underscore');
var Path   = require('path');
var config = require('../../config/configuration');
var load   = require('../load');

var knownConfigFiles = ['bower.json', 'package.json'];

function byConfig(component, pkg){
  var found = false;

  var json = _.find(pkg, function(file){
    return _.contains(knownConfigFiles, file);
  });

  if(!json){ return found; } // no configuration file found

  var package = require(Path.join(config.basePath + '/', component + '/', json));
  var main    = package.main;

  if(!main){            return found; } // No main path found
  if(main === 'index'){ return found; } // index is not a lib

  if(typeof main == 'string'){
      var path = Path.normalize(config.basePath + component + '/' + main);
      found    = true;

      load(component, path);

  } else if(Array.isArray(main)){

    _.each(main, function(lib){
      if(lib.match(/\.js$/)){
        var path = Path.normalize(config.basePath + component + '/' + lib);
        found    = true;

        load(component, path);
      }
    });

  }

  return found;
}

module.exports = byConfig;
