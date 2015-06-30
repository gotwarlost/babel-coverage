var React = require('react');

module.exports = React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            text: ''
        };
    },

    getText: function() {
        if (true) {
            return this.props.text;
        }

        // Unreachable.
        return false;
    },

    render: function() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        );
    }
});
