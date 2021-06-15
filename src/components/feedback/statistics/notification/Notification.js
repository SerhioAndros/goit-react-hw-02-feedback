import React from "react";
import styles from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <p className={styles.placeholderText}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
