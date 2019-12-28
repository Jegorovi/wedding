import React, { useContext } from "react";
import Card from "antd/lib/card"
import { faGift, faHamburger, faPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { translations } from "../../i18t";
import { LanguageContext } from "../../context";

import styles from "./cards.module.scss";

const cardHeadStyle: React.CSSProperties = {
  fontSize: "5em",
  display: "flex",
  justifyContent: "center",
  color: "#fdcb6e",
};

export const Cards: React.FC = React.memo(() => {
  const lang = useContext(LanguageContext);

  return (
    <div className={styles.iconCardContainer}>
      <Card
        className={styles.iconCard}
        title={<FontAwesomeIcon icon={faGift} />}
        headStyle={cardHeadStyle}
      >
        {translations[lang].giftCard}
      </Card>
      <Card
        className={styles.iconCard}
        title={<FontAwesomeIcon icon={faPlane} />}
        headStyle={cardHeadStyle}
      >
        {translations[lang].travelCard}
      </Card>
      <Card
        className={styles.iconCard}
        title={<FontAwesomeIcon icon={faHamburger} />}
        headStyle={cardHeadStyle}
      >
        {translations[lang].foodCard}
      </Card>
    </div>
  );
});

export default Cards;
