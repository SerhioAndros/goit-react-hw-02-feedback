import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {!total() ? (
      <p>No feedback given</p>
    ) : (
      <ul className="stats-list">
        <li className="stats-item">
          <p className="stats-key">
            Good: <span className="stats-value">{good}</span>
          </p>
        </li>
        <li className="stats-item">
          <p className="stats-key">
            Neutral: <span className="stats-value">{neutral}</span>
          </p>
        </li>
        <li className="stats-item">
          <p className="stats-key">
            Bad: <span className="stats-value">{bad}</span>
          </p>
        </li>
        <li className="stats-item">
          <p className="stats-key">
            Total: <span className="stats-value">{total()}</span>
          </p>
        </li>
        <li className="stats-item">
          <p className="stats-key">
            Positive feedback:{" "}
            <span className="stats-value">{positivePercentage()}%</span>
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
