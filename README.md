#bower2array

List all installes Bower components in one single array

##Install

     npm install bower2array

##From

     app/
      - bower_components/
      -- componentA
      --- component-a.js
      -- componentB
      --- dist
      ---- js
      ----- component-b.js


## To

     [
       'app/bower_components/componentA/component-a.js',
       'app/bower_components/componentB/dist/js/component-b.js'
     ]

## How

     var bower2array = require('bower2array');

     bower2array.extract(function(list){
        // list of bower components
     });

## Prioritize bower components

Some times components have dependencies. This will get listed as mention then the rest;

     bower2array.prioritize(['angular', 'jquery', 'bootstrap']);

     [
       'app/bower_components/../angular.js',
       'app/bower_components/../jquery.js',
       'app/bower_components/../bootstrap.js',
       ...
     ]

## Ignore bower components

Ignore bower components

     bower2array.ignore([jquery']);

     [
       'app/bower_components/../angular.js',
       'app/bower_components/../bootstrap.js',
       ...
     ]

## Change base path

If bower components are installed in a different directory by default `app/bower_components/`

     bower2array.setPath('bower/bower_components');

## Karma

### Configuration file example

```javascript

var bower2array     = require('bower2array');
var _               = require('underscore');
var bowerComponents = [];

bower2array.prioritize([
  'angular',
  'jquery',
  'bootstrap'
]);

bower2array.ignore(['angular-scenario']);
bower2array.extract(function(list){
  bowerComponents = list;
});

module.exports = function(config){

    // list of files / patterns to load in the browser
    files: _.union(bowerComponents, [
      'specs/mySpec.js'
    ]),

};

```javascript
