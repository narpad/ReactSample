var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = 'c:\\react\\src\\client\\public';
var APP_DIR =  'c:\\react\\src\\client\\app';

var config = {
  entry: path.resolve(APP_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;