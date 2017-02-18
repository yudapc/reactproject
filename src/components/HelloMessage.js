import React from "react";

export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 onClick={this.props.clickHandler}>Hello {this.props.myname}</h1>
        );
    }
}
