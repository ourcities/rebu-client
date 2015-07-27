// Karma configuration
// Generated on Fri Jul 03 2015 10:56:54 GMT-0300 (BRT)
var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      './public/wysihtml/wysihtml-toolbar.min.js',
      './public/wysihtml/advanced_and_extended.js',
      'webpack.test.config.js'
    ],

    webpack: {
      devtool: 'inline-source-map',

      resolve: {
        extensions: [ '', '.js', '.jsx' ]
      },

      module: {
        loaders: [
          { test: /\.jsx?$/, loader: 'babel-loader' }
        ]
      },

      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'BASE_URL': '"http://localhost:3000/v1"',
            'NODE_ENV': '"test"'
          }
        })
      ]
    },

    webpackServer: {
      noInfo: true
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'webpack.test.config.js': [ 'webpack', 'sourcemap' ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
