import React from "react";

export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello {this.props.myname}</h1>
        );
    }
}
