import React from "react";
import cx from "classnames";
import styles from "./section.module.scss";

interface SectionProps {
  color?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ color, children }) => {
  return (
    <div style={{ backgroundColor: color }} className={cx(styles.section)}>
      {children}
    </div>
  );
}
