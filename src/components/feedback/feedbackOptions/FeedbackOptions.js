import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
import { v4 as uuid } from "uuid";

import FeedbackOptionsItem from "./feedbackOptionsItem/FeedbackOptionsItem";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.buttonList}>
    {options.map((option) => (
      <FeedbackOptionsItem
        key={uuid()}
        type={option}
        onLeaveFeedback={onLeaveFeedback}
      />
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
