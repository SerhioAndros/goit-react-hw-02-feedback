import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptionsItem.module.css";
import { capitalLetter } from "../../../../lib/custom-functions";

const FeedbackOptionsItem = ({ type, onLeaveFeedback }) => (
  <li className={styles.buttonListItem}>
    <button
      type="button"
      className={styles.buttonRate}
      data-type={type}
      onClick={onLeaveFeedback}
    >
      {capitalLetter(type)}
    </button>
  </li>
);

FeedbackOptionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptionsItem;
