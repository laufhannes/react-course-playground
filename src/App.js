import React, { Component } from "react";

import update from "immutability-helper";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Clock from "./Clock";
import NumberInput from "./NumberInput";
import Rating from "./Rating";

import logo from "./logo.svg";
import "./App.css";
import MathadorConnected from "./MathadorConnected";

const roulette = (lower, upper) =>
  lower + Math.round(Math.random() * (upper - lower));

const randomImage = (width = 200, height = 300, id = NaN) =>
  "https://picsum.photos/" +
  width.toString() +
  "/" +
  height.toString() +
  "?image" +
  (isNaN(id) ? Math.floor(Math.random() * 100) : id);

const lastNonNullIndex = arr => {
  let index = arr.length;
  while (index-- && !arr[index]);

  return index;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClockVisible: false,
      countdownActive: false,
      countdown: 11,
      rouletteNumber: roulette(0, 36),
      numImages: 1,
      randomImages: [{ id: 0, rnd: roulette(0, 100), selected: false }],
      rating: 3
    };

    this.luckyNumber = roulette(1, 6);
  }

  updateCountdown = () => {
    this.setState(state => ({
      countdown: state.countdown - 1
    }));

    if (this.state.countdown >= 0) {
      setTimeout(this.updateCountdown, 1000);
    }
  };

  resetCountdown = () => {
    this.setState({
      countdownActive: false,
      countdown: 11
    });
  };

  handleRefreshClick = event => {
    event.preventDefault();

    this.setState({
      rouletteNumber: roulette(0, 36)
    });
  };

  handleNumImagesChange = event => {
    const newNumImages = parseInt(event.target.value, 10);

    if (newNumImages !== this.state.numImages) {
      this.setState(state => ({
        numImages: newNumImages,
        randomImages:
          newNumImages > state.numImages
            ? update(state.randomImages, {
                $push: [
                  {
                    id: state.randomImages.length,
                    rnd: roulette(0, 100),
                    selected: false
                  }
                ]
              })
            : update(state.randomImages, {
                $unset: [lastNonNullIndex(state.randomImages)]
              })
      }));
    }
  };

  handleImageClick(index) {
    this.setState(state => ({
      randomImages: update(state.randomImages, {
        [index]: {
          selected: { $set: !state.randomImages[index].selected }
        }
      })
    }));
  }

  getCoin() {
    return Math.round(Math.random());
  }

  onClickRating = newRating => {
    this.setState({
      rating: newRating
    });
  };

  onRatingInputChange = event => {
    this.setState({
      rating: event.target.value
    });
  };

  RatingView = props => {
    return (
      <React.Fragment>
        <Rating
          stars={this.state.rating}
          onRatingChange={this.onClickRating}
          {...props}
        />
        <NumberInput
          value={this.state.rating}
          onChange={this.onRatingInputChange}
          min="0"
          max="5"
        />
      </React.Fragment>
    );
  };

  render() {
    const today = new Date();
    const todayString = today.toLocaleDateString();

    if (this.state.countdownActive && this.state.countdown <= 0) {
      return (
        <div className="App">
          <header className="App-header" style={{ height: "100vh" }}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React-Schulung &ndash; {todayString}</h1>

            <h2>BOOM!</h2>

            <button onClick={this.resetCountdown}>Recover me!</button>
          </header>
        </div>
      );
    }

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React-Schulung &ndash; {todayString}</h1>

            <div>
              <button
                onClick={evt => {
                  this.setState({
                    countdownActive: true
                  });
                  this.updateCountdown();
                }}
              >
                Start self-destruction &hellip;
              </button>
            </div>

            <h2>{this.state.countdownActive ? this.state.countdown : ""}</h2>
          </header>

          <section id="container">
            <nav>
              <ul>
                <li>
                  <h2>Playground</h2>
                </li>
                <li>
                  <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/rating">Rating</NavLink>
                </li>
                <li>
                  <NavLink to="/random-numbers">Random numbers</NavLink>
                </li>
                <li>
                  <NavLink to="/random-images">Random images</NavLink>
                </li>
                <li>
                  <NavLink to="/mathador">Mathador</NavLink>
                </li>
              </ul>

              <label>
                <input
                  type="checkbox"
                  onChange={evt => {
                    this.setState({
                      isClockVisible: !this.state.isClockVisible
                    });
                  }}
                />
                Show clock
              </label>
            </nav>

            <main>
              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <div>
                      <h2>Welcome!</h2>
                      <p>
                        Welcome to my React course's playground. Please select a
                        component to view.
                      </p>
                    </div>
                  );
                }}
              />

              <Route path="/rating" component={this.RatingView} />

              <Route
                path="/random-numbers"
                render={props => {
                  return (
                    <div>
                      <p className="App-intro">
                        Die Glückszahl des Tages: {this.luckyNumber}
                      </p>
                      <p className="App-intro">
                        Die Roulettezahl des Tages: {this.state.rouletteNumber}
                        &nbsp;
                        <button onClick={this.handleRefreshClick}>
                          Refresh
                        </button>
                      </p>
                      <p className="App-intro">
                        Do we have random luck?{" "}
                        {1 === this.getCoin() ? "Yes" : "No"}
                      </p>
                    </div>
                  );
                }}
              />

              <Route
                path="/random-images"
                render={props => {
                  return (
                    <form>
                      <div>
                        <input
                          type="number"
                          value={this.state.numImages}
                          onChange={evt => this.handleNumImagesChange(evt)}
                          min="0"
                        />
                      </div>

                      <div className="image-list">
                        {this.state.randomImages.map((img, index) => (
                          <img
                            className={img.selected ? "selected" : ""}
                            key={img.id.toString()}
                            src={randomImage(200, 300, img.rnd)}
                            width="200"
                            height="300"
                            alt="Random stuff"
                            onClick={evt => this.handleImageClick(index)}
                          />
                        ))}
                      </div>
                      {0 === this.state.numImages ? (
                        <em>No images to show.</em>
                      ) : (
                        ""
                      )}
                    </form>
                  );
                }}
              />

              <Route path="/mathador" component={MathadorConnected} />

              <footer>{this.state.isClockVisible ? <Clock /> : ""}</footer>
            </main>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
