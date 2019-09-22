import React from "react";
import cx from "classnames";
import styles from "./section.module.scss";

interface SectionProps {
  color: string;
  children?: React.ReactNode;
}

const mapColorToStyles = (color: string) => {
  switch(color) {
    case "green":
      return styles.green;
    default:
      return null;
  }
}

export const Section: React.FC<SectionProps> = ({ color, children }) => {
  return (
    <div className={cx(styles.section, mapColorToStyles(color))}>
      {children}
    </div>
  );
}
