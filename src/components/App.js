import React from "react";
import HelloMessage from "./HelloMessage";

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "gray"};
  }

  handleClick(e) {
    let backgroundColor = this.state.color == "gray" ? "red" : "gray";
    this.setState({color: backgroundColor})

    e.preventDefault();
  }

  render() {
    return (
        <header onClick={this.handleClick.bind(this)} style={{backgroundColor:this.state.color}}>
          <HelloMessage myname="Sebastian!" />
        </header>
    );
  }
}
