import React, { PureComponent } from "react";

class Clock extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
    this.timerId = undefined;
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div className="clock">{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Clock;
