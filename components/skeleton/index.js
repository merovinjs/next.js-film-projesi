import React from "react";
import styles from "./styles.module.css";
function Skeleton({ width, height }) {
  return <div className={styles.skeleton} styles={{ width, height }}></div>;
}

export default Skeleton;
