var Path   = require('path');
var config = require('../config/configuration');

module.exports = function(newPath){
  config.basePath = Path.resolve(process.cwd(), '/' , newPath);
};
