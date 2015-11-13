var fs         = require('fs');
var _          = require('underscore');
var load       = require('../load');
var config     = require('../../config/configuration');
var findByName = require('./byName');
var findByJs   = require('./byJs');

function byFolders(component, pkg){
  var found = false;

  var folder = _.find(pkg, function(f){
    return _.contains(config.folders, f);
  });

  if(!folder){ return found; }

  var path = config.basePath + component + '/' + folder + '/';
  var list = fs.readdirSync(path);

  _.each(list, function(lib){

    if(lib.match(/\.js$/)){
      path = path + lib;
      found    = true;

      load(component, path);
    }else if(lib.match('^js$')){

      path  = path + 'js/';
      var l = fs.readdirSync(path);

      found = findByName(component, l);
      if(!found){
        found = findByJs(component, l);
      }

    }
  });

  return found;
}

module.exports = byFolders;
