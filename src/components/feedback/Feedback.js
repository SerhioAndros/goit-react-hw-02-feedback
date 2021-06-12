import React from "react";
import { Component } from "react";

export default class Feedback extends Component {
  state = {
    good: 1,
    neutral: 333,
    bad: 33,
  };

  countTotalFeedback = () => {
    const newArr = Object.values(this.state);
    return newArr.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.state.good) return 0;
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100 * 10) / 10
    );
  };

  render() {
    return (
      <>
        <h1 className="header-feedback">Please leave feedback</h1>

        <ul className="button-list">
          <li className="button-list-item">
            <button type="button" className="button-rate">
              Good
            </button>
          </li>
          <li className="button-list-item">
            <button type="button" className="button-rate">
              Neutral
            </button>
          </li>
          <li className="button-list-item">
            <button type="button" className="button-rate">
              Bad
            </button>
          </li>
        </ul>

        <h2 className="header-stats">Statistics</h2>

        <ul className="stats-list">
          <li className="stats-item">
            <p className="stats-key">
              Good: <span className="stats-value">{this.state.good}</span>
            </p>
          </li>
          <li className="stats-item">
            <p className="stats-key">
              Neutral: <span className="stats-value">{this.state.neutral}</span>
            </p>
          </li>
          <li className="stats-item">
            <p className="stats-key">
              Bad: <span className="stats-value">{this.state.bad}</span>
            </p>
          </li>
          <li className="stats-item">
            <p className="stats-key">
              Total:{" "}
              <span className="stats-value">{this.countTotalFeedback()}</span>
            </p>
          </li>
          <li className="stats-item">
            <p className="stats-key">
              Positive feedback:{" "}
              <span className="stats-value">
                {this.countPositiveFeedbackPercentage()}%
              </span>
            </p>
          </li>
        </ul>
      </>
    );
  }
}
