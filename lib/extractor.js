/*
 * Da Extractor
 *
 *          .-..-.
 *        (-o/\o-)
 *       /`""``""`\
 *       \ /.__.\ /
 *        \ `--` /
 *         `)  ('
 *      ,  /::::\  ,
 *      |'.\::::/.'|
 *     _|  ';::;'  |_
 *    (::)   ||   (::)                        _.
 *     "|    ||    |"                       _(:)
 *      '.   ||   .'                       /::\
 *        '._||_.'                         \::/
 *         /::::\                         /:::\
 *         \::::/                        _\:::/
 *          /::::\_.._  _.._  _.._  _.._/::::\
 *          \::::/::::\/::::\/::::\/::::\::::/
 *           `""`\::::/\::::/\::::/\::::/`""`
 *                `""`  `""`  `""`  `""`
 *
 *  *
 * */

var config        = require('../config/configuration');
var prioritize    = require('./prioritize');
var Path          = require('path');
var fs            = require('fs');
var _             = require('underscore');
var src           = require('./src');
var findByConfig  = require('./methods/byConfig');
var findByMin     = require('./methods/byMin');
var findByName    = require('./methods/byName');
var findByJs      = require('./methods/byJs');
var findByFolders = require('./methods/byJs');

module.exports = function(ready){
  (ready) || (ready = function(){});

  config.basePath     = Path.join(process.cwd(), config.basePath)
  src.components      = fs.readdirSync(config.basePath);
  src.bowerComponents = []; // Start fresh

  prioritize.reOrder();

  // Ignore somponents in black list
  src.components = _.reject(src.components, function(component){
    return src.blackList.indexOf(component) !== -1;
  });

  var loaded = _.after(src.components.length, function(){
    return ready(src.bowerComponents);
  });

  _.each(src.components, function(component){
    var pkg   = fs.readdirSync(Path.join(config.basePath + '/', component));
    var found = false;

    found             = findByConfig(component,  pkg);
    if(!found){ found = findByMin(component,     pkg); }
    if(!found){ found = findByName(component,    pkg); }
    if(!found){ found = findByJs(component,      pkg); }
    if(!found){ found = findByFolders(component, pkg); }

    if(!found){ console.log('Fail loading: ', component); }
    loaded();
  });

};
