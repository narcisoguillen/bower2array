var _      = require('underscore');
var Path   = require('path');
var config = require('../../config/configuration');
var load   = require('../load');

function byConfig(component, pkg){
  var found = false;

  var json = _.find(pkg, function(f){
    return _.contains(['bower.json', 'package.json'], f);
  });

  if(!json){ return found; }

  var pg = require(Path.join(config.basePath + '/', component + '/', json));
  if(!pg.main){ return found; }
  if(typeof pg.main == 'string' && pg.main.match('index')){ return found; }

  if(typeof pg.main == 'string'){
      var path = Path.normalize(config.basePath + component + '/' + pg.main);
      found    = true;

      load(component, path);

  } else if(Array.isArray(pg.main)){
    _.each(pg.main, function(lib){

      if(lib.match(/\.js$/)){
        var path = Path.normalize(config.basePath + component + '/' + lib);
        found    = true;

        load(component, path);
      }

    })
  }

  return found;
}

module.exports = byConfig;
