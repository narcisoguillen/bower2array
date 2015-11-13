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

     bower2array.load(function(list){
        // list of bower components
     });

## Set list of dependencies

Some times components have dependencies. This will get listed as mention then the rest;

     bower2array.setDeps(['angular', 'jquery', 'bootstrap']);

     [
       'app/bower_components/../angular.js',
       'app/bower_components/../jquery.js',
       'app/bower_components/../bootstrap.js',
       ...
     ]

## Change base path

If bower components are installed in a different directory

     bower2array.setPath('bower/bower_components');
