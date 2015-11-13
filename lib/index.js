var fs      = require('fs');
var Path    = require('path');
var _       = require('underscore');
var config  = require('../config/configuration');
var list    = require('./list');

var findByConfig  = require('./mechanisms/byConfig');
var findByMin     = require('./mechanisms/byMin');
var findByName    = require('./mechanisms/byName');
var findByJs      = require('./mechanisms/byJs');
var findByFolders = require('./mechanisms/byJs');

module.exports.load = function(cb){

  config.basePath = Path.join(process.cwd(), config.basePath);
  var components  = fs.readdirSync(config.basePath);


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

module.exports.setPath = function(path){
  config.basePath = Path.join(process.cwd(), path);
};
