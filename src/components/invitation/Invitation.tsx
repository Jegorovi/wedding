import React from "react";
import styles from "./invitation.module.scss";
import { Lang } from "../../context";
import { translations, translate } from "../../i18t";

export const Invitation: React.FC<{ lang: Lang}> = ({ lang }) => {
  return (
    <div className={styles.invitation}>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: translate(translations[lang].title, "<br/>")}}
      />
      <div className={styles.namesContainer}>
        <p className={styles.names}>Sara Nordmyr da Cunha</p>
        <p className={styles.and}>{translations[lang].and}</p>
        <p className={styles.names}>Rolands Jegorovs</p>
      </div>
      <p className={styles.dates}>{translations[lang].latviaEvent}</p>
      <p className={styles.dates}>{translations[lang].finlandEvent}</p>
      <p className={styles.dates}>{translations[lang].portugalEvent}</p>
      <p className={styles.save}>{translations[lang].saveTheDate}</p>
    </div>
  );
}