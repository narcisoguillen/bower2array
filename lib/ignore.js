var src = require('./src');

module.exports = function(ignore){
  src.blackList = ignore;
};
