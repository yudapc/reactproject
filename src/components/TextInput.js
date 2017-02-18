import React from "react";

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myInput: ""
        };
    }

    handleType(e) {
        this.setState({myInput: e.target.value});
    }

    handleSubmit(e) {
        this.props.parentListener(this.state.myInput);
        this.setState({myInput: ""});
        e.preventDefault();
    }

    render() {
        return (
            <form action="#" onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.handleType.bind(this)} type="text" value={this.state.myInput}></input>
            </form>
        );
    }
}
