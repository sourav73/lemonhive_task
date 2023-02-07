import React from "react";
import styles from "./StatsBar.module.scss";

const StatsBar = ({ value }) => {
  return (
    <div className={styles.statsBar}>
      <div className={styles.barTotal}></div>
      <div
        className={styles.barCurrentValue}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default StatsBar;
