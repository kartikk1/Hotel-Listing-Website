import React from "react";
import styles from "./Tabs.module.css";

import {BsArrowRight} from "react-icons/bs";

const Tabs = ({ activeLocation, onTabClick }) => {
  console.log(activeLocation);
  return (
    <div className={styles.tabs}>
      <button
        onClick={() => onTabClick('New York')}
        className={activeLocation === 'New York' ? styles.active : styles.inactive}
      >
        New York
      </button>
      <button
        onClick={() => onTabClick('Mumbai')}
        className={activeLocation === 'Mumbai' ? styles.active : styles.inactive}
      >
        Mumbai
      </button>
      <button
        onClick={() => onTabClick('Paris')}
        className={activeLocation === 'Paris' ? styles.active : styles.inactive}
      >
        Paris
      </button>
      <button
        onClick={() => onTabClick('London')}
        className={activeLocation === 'London' ? styles.active : styles.inactive}
      >
        London
      </button>

      <div className={styles.showAll}><p>View All </p> <BsArrowRight /></div>
    </div>
  );
};

export default Tabs;