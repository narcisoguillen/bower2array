var fs      = require('fs');
var Path    = require('path');
var _       = require('underscore');
var config  = require('../config/configuration');
var list    = require('./list');
var deps    = [];

var findByConfig  = require('./mechanisms/byConfig');
var findByMin     = require('./mechanisms/byMin');
var findByName    = require('./mechanisms/byName');
var findByJs      = require('./mechanisms/byJs');
var findByFolders = require('./mechanisms/byJs');

module.exports.load = function(cb){

  config.basePath = Path.join(process.cwd(), config.basePath);
  var components  = fs.readdirSync(config.basePath);

  // Order by dependencies
  _.each(deps, function(dep, index){
    var current = components.indexOf(dep);
    if(current === -1){ return true };

    var replace = components[index];
    components[index]   = dep;
    components[current] = replace;
  });

  var loaded = _.after(components.length, function(){
    return cb(list);
  });

  _.each(components, function(component){
    var pkg   = fs.readdirSync(config.basePath + component);
    var found = false;

    found             = findByConfig(component, pkg) ;
    if(!found){ found = findByMin(component, pkg); }
    if(!found){ found = findByName(component, pkg); }
    if(!found){ found = findByJs(component, pkg); }
    if(!found){ found = findByFolders(component, pkg); }

    if(!found){ console.log('Fail loading: ', component); }
    loaded();
  });

};

module.exports.setDeps = function(dependencies){
  deps = dependencies;
};

module.exports.setPath = function(path){
  config.basePath = Path.join(process.cwd(), path);
};
