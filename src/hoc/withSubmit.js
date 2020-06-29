import React, {Component} from 'react';

const withSubmit = (BaseComponent) => {
    class WrapWithSubmit extends Component {
        state = {
            submit: false
        }

        handleSubmit = value => e => {
            e.preventDefault();
            console.log(value)
        }

        render() {
            return (
                <BaseComponent {...this.state} submit={this.handleSubmit} {...this.props}/>
            )
        }
    }

    return WrapWithSubmit;

}

export default withSubmit;