import React, { Component } from "react";

class Mathador extends Component {
  render() {
    return (
      <div className="mathador">
          <strong>{this.props.mathadorNumber}</strong>
          &nbsp;
          <button onClick={this.handleTimes3Click}>x 3</button>
          &nbsp;
          <button onClick={this.handleMinus7Click}>- 7</button>
      </div>
    );
  }

  handleTimes3Click = (event) => {
    event.preventDefault();

    this.props.onTimes3Click();
  }

  handleMinus7Click = (event) => {
    event.preventDefault();

    this.props.onMinus7Click();
  }
}

Mathador.defaultProps = {
  mathadorNumber: 1,
  onTimes3Click: () => {},
  onMinus7Click: () => {}
};

export default Mathador;
