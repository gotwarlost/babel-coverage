// Karma configuration
// Generated on Tue Jun 23 2015 17:33:28 GMT-0700 (PDT)

var istanbul = require('browserify-istanbul');

module.exports = function(config) {
  config.set({
   coverageReporter: {
      reporters: [
          { type: 'html' },
          { type: 'text-summary' }
      ]
    },

    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'browserify'],
    files: [
      './src/*.js?(x)',
      './test/*.js?(x)'
    ],
    exclude: [],
    browserify: {
        transform: [
            'babelify',
            istanbul()
        ],
        extensions: ['.js', '.jsx']
    },
    preprocessors: {
      './src/*.js?(x)': ['browserify'],
      './test/*.js?(x)': ['browserify']
    },
    reporters: ['progress', 'coverage'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  })
};

