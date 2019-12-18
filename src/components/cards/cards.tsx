import React from "react";
import Card from "antd/lib/card"
import { faGift, faBed, faHamburger } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./cards.module.scss";

const cardHeadStyle: React.CSSProperties = {
  fontSize: "5em",
  display: "flex",
  justifyContent: "center",
  color: "#fdcb6e",
};

export const Cards: React.FC = () => {
  return (
    <div className={styles.iconCardContainer}>
      <Card
        className={styles.iconCard}
        title={<FontAwesomeIcon icon={faGift} />}
        headStyle={cardHeadStyle}
      >
        Gifts are optional. If you still decide to give us a gift, the only option we accept is money. An account will be setup for transfers
      </Card>
      <Card
        className={styles.iconCard}
        title={<FontAwesomeIcon icon={faBed} />}
        headStyle={cardHeadStyle}
      >
        We would love to see you here, but, unfortunately, accommodations are not covered by us
      </Card>
      <Card
        className={styles.iconCard}
        title={<FontAwesomeIcon icon={faHamburger} />}
        headStyle={cardHeadStyle}
      >
        Food and drinks will be covered by us
      </Card>
    </div>
  );
}
