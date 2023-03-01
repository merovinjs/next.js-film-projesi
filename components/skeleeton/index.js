import React from "react";

function Skeleton({ width, height }) {
  return (
    <div className={styles.skeleton} styles={{ width, height }}>
      Skeleton
    </div>
  );
}

export default Skeleton;
