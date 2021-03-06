/*
 * bower2array Definition
 *
 *   extract    -> list all bower components
 *   prioritize -> put components on top
 *   setPath    -> change where to look for paths
 *   ignore     -> components not to load
 * */
module.exports.extract      = require('./extractor');
module.exports.setPath      = require('./changePath');
module.exports.ignore       = require('./ignore');
module.exports.prioritize   = require('./prioritize').set;
module.exports.dependencies = require('./dependencies').set;
module.exports.config       = require('./config');
