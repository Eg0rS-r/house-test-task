import React from "react";

import styles from "./ErrorPopup.module.scss";

const ErrorPopup = () => (
  <div className={styles.error}>
    <h1>Сервер не отвечает</h1>
    <h2>попробуйте позже</h2>
  </div>
);

export default ErrorPopup;
