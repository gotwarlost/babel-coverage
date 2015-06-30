import React from 'react';

export default class MyModule extends React.Component {
    constructor(props) {
        super(props);
        this.getText = this.getText.bind(this);
    }

    getText() {
        if (true) {
            return this.props.text;
        }

        // Unreachable.
        return false;
    }

    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

MyModule.propTypes = {
    text: React.PropTypes.string
};

MyModule.defaultProps = {
    text: ''
};
