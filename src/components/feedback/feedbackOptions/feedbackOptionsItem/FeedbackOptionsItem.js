import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptionsItem.module.css";

const FeedbackOptionsItem = ({ type, onLeaveFeedback }) => (
  <li className={styles.buttonListItem}>
    <button
      type="button"
      className={styles.buttonRate}
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
