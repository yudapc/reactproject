import React from "react";

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.name };
  }

  render() {
    return (
        <h1>{this.state.title}</h1>
    );
  }
}
