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

```javascript
var bower2array = require('bower2array');

bower2array.extract(function(list){
  // list of bower components
});
```

## Configure bower2array at once

```javascript
bower2array.config({

  ignore     : ['angular-scenario'],
  prioritize : [ 'angular', 'jquery', 'bootstrap', 'moment' ],

  dependencies : {
    'angular-stripe' : ['app/scripts/libs/stripe.js']
  }

});
```


## Prioritize bower components

Some times components have dependencies. This will get listed as mention then the rest;

```javascript
bower2array.prioritize(['angular', 'jquery', 'bootstrap']);

[
 'app/bower_components/../angular.js',
 'app/bower_components/../jquery.js',
 'app/bower_components/../bootstrap.js',
 ...
]
```

## External dependencies

Some times components have external dependencies

```javascript
bower2array.dependencies({
 'angular-stripe' : ['public/javascripts/vendor/stripe.js']
});

[
 'public/javascripts/vendor/stripe.js',
 '/bower_components/angular-stripe/release/angular-stripe.js'
]
```

## Ignore bower components

Ignore bower components

```javascript
bower2array.ignore(['jquery']);

[
 'app/bower_components/../angular.js',
 'app/bower_components/../bootstrap.js',
 'app/bower_components/../moment.js'
]
```

## Change base path

If bower components are installed in a different directory by default `app/bower_components/`

```javascript
bower2array.setPath('bower/bower_components');
```

## Karma

### Configuration file example

```javascript

bower2array.config({

  ignore     : ['angular-scenario'],
  prioritize : [ 'angular', 'jquery', 'bootstrap', 'moment' ],

  dependencies : {
    'angular-stripe' : ['app/scripts/libs/stripe.js']
  }

});

bower2array.extract(function(list){
  bowerComponents = list;
});

module.exports = function(config){

    // list of files / patterns to load in the browser
    files: _.union(bowerComponents, [
      'specs/mySpec.js'
    ]),

};

```
