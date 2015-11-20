/*
 * Configure bower2array component at once
 *
 * bower2array.config({
 *
 *   ignore     : ['angular-scenario'],
 *   prioritize : [ 'angular', 'jquery', 'bootstrap', 'moment' ],
 *
 *   dependencies : {
 *     'angular-stripe' : ['app/scripts/libs/stripe.js']
 *   }
 *
 * });
 *
 * */

var _ = require('underscore');

module.exports = function(config){

  var context = {
    ignore       : require('./ignore'),
    dependencies : require('./dependencies').set,
    prioritize   : require('./prioritize').set

  };

  _.each(config, function(value, method){
    if(!this[method]){ return true; } // Skip
    this[method](value);
  }, context);

};
