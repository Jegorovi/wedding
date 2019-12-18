import React from "react";
import cx from "classnames";
import styles from "./invitation.module.scss";
import { Lang } from "../../context";
import { translations, translate } from "../../i18t";

export const Invitation: React.FC<{ lang: Lang}> = ({ lang }) => {
  const isLargeText = [Lang.ru, Lang.lv].includes(lang);
  const isCyrillic = lang === Lang.ru;
  return (
    <div className={cx(styles.container, isLargeText && styles.largeText, isCyrillic && styles.cyrillic)}>
      <div className={styles.innerContainer}>
        <img src={process.env.PUBLIC_URL + "./palmLeaves.png"} className={styles.palmImg} alt=""/>
        <div className={styles.text}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: translate(translations[lang].title, "<br/>")}}
          />
          <div className={styles.namesContainer}>
            <p className={styles.names}>{translations[lang].sara}</p>
            <p className={styles.and}>{translations[lang].and}</p>
            <p className={styles.names}>{translations[lang].roland}</p>
          </div>
          <p className={styles.dates}>{translations[lang].latviaEvent}</p>
          <p className={styles.dates}>{translations[lang].finlandEvent}</p>
          <p className={styles.dates}>{translations[lang].portugalEvent}</p>
          <p className={styles.save}>{translations[lang].saveTheDate}</p>
        </div>
      </div>
    </div>
  );
}
