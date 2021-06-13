import React from "react";
import PropTypes from "prop-types";

const FeedbackOptionsItem = ({ type, onLeaveFeedback }) => (
  <li className="button-list-item">
    <button
      type="button"
      className="button-rate"
      data-type={type}
      onClick={onLeaveFeedback}
    >
      {type[0].toUpperCase() + type.slice(1, type.length)}
    </button>
  </li>
);

FeedbackOptionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptionsItem;
