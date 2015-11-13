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
