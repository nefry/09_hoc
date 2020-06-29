import React, {Component} from 'react';

const withToggle = (BaseComponent) => {
    class WrapWithToggle extends Component {
        state = {
            isOn: this.props.checked ? true : false
        }

        handleChange = (e) => {
            this.setState({
                isOn: Boolean(e.target.checked)
            })
        }

        render() {
            return (
                <BaseComponent {...this.state} handleChange={this.handleChange} {...this.props} />
            )
        }
    }

    return WrapWithToggle;
}

export default withToggle;