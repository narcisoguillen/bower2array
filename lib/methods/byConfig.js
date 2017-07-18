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

  if(!main){ return found; } // No main path found

  if(typeof main == 'string'){

    if(main.match('index')){ return found; } // index is not a lib

    var path = Path.normalize(config.basePath + component + '/' + main);
    if(Path.extname(path) !== '.js'){ path = path + '.js'; }

    found = true;
    load(component, path);

  } else if(Array.isArray(main)){

    _.each(main, function(lib){
      if(lib.match(/\.js$/)){
        var path = Path.normalize(config.basePath + component + '/' + lib);

        found = true;
        load(component, path);
      }
    });

  }

  return found;
}

module.exports = byConfig;
