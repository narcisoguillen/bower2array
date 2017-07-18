var config = require('../config/configuration');

module.exports = function(newPath){
  config.basePath = newPath;
};
