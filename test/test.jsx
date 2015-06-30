var MyModule = require('../src/mymodule.jsx');
var MyES6Module = require('../src/es6module.jsx');
var React = require('react');
var TestUtils = require('react/addons').addons.TestUtils;

describe('my test suite', function() {
    it('does something', function() {
        var moduleInstance = TestUtils.renderIntoDocument(
            React.createElement(
                MyModule, { text: 'rofl' }
            )
        );

        expect(moduleInstance.getText()).to.equal('rofl');
    });

    it('does something part 2', function() {
        var moduleInstance = TestUtils.renderIntoDocument(
            React.createElement(
                MyES6Module, { text: 'rofl' }
            )
        );

        expect(moduleInstance.getText()).to.equal('rofl');
    });
});
