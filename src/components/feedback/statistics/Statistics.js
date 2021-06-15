import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import Notification from "./notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {!total() ? (
      <Notification message={"No feedback given"} />
    ) : (
      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <p>
            Good: <span>{good}</span>
          </p>
        </li>
        <li className={styles.statsItem}>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
        </li>
        <li className={styles.statsItem}>
          <p>
            Bad: <span>{bad}</span>
          </p>
        </li>
        <li className={styles.statsItem}>
          <p>
            Total: <span>{total()}</span>
          </p>
        </li>
        <li className={styles.statsItem}>
          <p>
            Positive feedback: <span>{positivePercentage()}%</span>
          </p>
        </li>
      </ul>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
