import React from "react";
import { Component } from "react";
import styles from "./Feedback.module.css";
// функция roundingToDecimal округляет до определеннго количества значков
// после запятой. Она принимает 2 аргумента, первый - число, которое нужно
// округлить, второй - сколько знаков после запятой должно остаться
import { roundingToDecimal } from "../../lib/custom-functions";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const newArr = Object.values(this.state);
    return newArr.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.state.good) return 0;
    return roundingToDecimal(
      (this.state.good / this.countTotalFeedback()) * 100,
      2
    );
  };

  onIncrement = (evt) => {
    const stateValue = evt.target.dataset.type;
    this.setState((prevState) => {
      if (stateValue === "good") {
        return { good: prevState.good + 1 };
      } else if (stateValue === "neutral") {
        return { neutral: prevState.neutral + 1 };
      } else if (stateValue === "bad") {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onIncrement}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
