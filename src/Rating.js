import React, { PureComponent } from "react";
import "./Rating.css";

class Rating extends PureComponent {
  // As this component is a PureComponent, `render()` will only be called if `newProps.stars != oldProps.stars`
  render() {
    const starData = [];

    for (let i = 1; i <= this.props.maxStars; ++i) {
      starData.push({
        id: i,
        active: i <= this.props.stars
      });
    }

    return (
      <div className="Rating-stars">
        {starData.map(star => (
          <span
            key={star.id.toString()}
            onClick={evt => {
              this.props.onRatingChange(
                1 === star.id && 1 === this.props.stars ? 0 : star.id
              );
            }}
          >
            {star.active ? this.props.fullStar : this.props.emptyStar}
          </span>
        ))}
      </div>
    );
  }
}

Rating.defaultProps = {
  maxStars: 5,
  fullStar: "★",
  emptyStar: "☆",
  onRatingChange: () => {}
};

export default Rating;
