import React from "react";
import HelloMessage from "./HelloMessage";
import TextInput from "./TextInput";

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "gray",
            key: Math.random(),
            myName: "World"
        };
    }

    handleClick(e) {
        let backgroundColor = this.state.color == "gray" ? "red":"gray";
        this.setState({ color: backgroundColor });

        e.preventDefault();
    }

    handleInputFromChild(val) {
        this.setState({
            key: Math.random(),
            myName:val
        });
    }

    render() {
        return (
            <section>
                <header style={{backgroundColor:this.state.color}}>
                    <HelloMessage key={this.state.key} clickHandler={this.handleClick.bind(this)} myname={this.state.myName} />
                </header>
                <TextInput parentListener={this.handleInputFromChild.bind(this)}/>
            </section>
        );
    }
}
