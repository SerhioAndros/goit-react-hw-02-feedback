import React from "react";
import PropTypes from "prop-types";

import FeedbackOptionsItem from "./feedbackOptionsItem/FeedbackOptionsItem";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className="button-list">
    {options.map((option) => (
      <FeedbackOptionsItem
        key={option}
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
