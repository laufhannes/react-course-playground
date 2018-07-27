import React, { PureComponent } from "react";
import "./NumberInput.css";

class NumberInput extends PureComponent {
  render() {
    return (
      <div className="NumberInput">
        <span onClick={this.onDecrement} className={this.props.value === parseInt(this.props.min, 10) ? "disabled" : ""}>-</span>
        {this.props.value} {isFinite(this.props.max) ? " / " + this.props.max : ""}
        <span onClick={this.onIncrement} className={this.props.value === parseInt(this.props.max, 10) ? "disabled" : ""}>+</span>
      </div>
    );
  }

  onDecrement = () => {
    this.props.onChange({target: {value: Math.max(this.props.value - 1, this.props.min)}});
  };

  onIncrement = () => {
    this.props.onChange({target: {value: Math.min(this.props.value + 1, this.props.max)}});
  };
}

NumberInput.defaultProps = {
  value: 1,
  min: -Infinity,
  max: +Infinity,
  onChange: () => {}
};

export default NumberInput;
