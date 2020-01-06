import React, { useContext } from "react";
import { Lang, LanguageContext } from "../../context";
import { translations, translate } from "../../i18t";

import styles from "./RegistrationForm.module.scss";

const langToFormMap = {
  [Lang.en]: `https://docs.google.com/forms/d/e/1FAIpQLSedtDtJtYlc119OgXm4djHMnDzSzMIbsmSCyCckTJJKQ6qA2w/viewform?embedded=true`,
  [Lang.lv]: `https://docs.google.com/forms/d/e/1FAIpQLSdB_5UrAkg0xeh02cjs2AkdHsewwe0yobFWzf7KKFP3U6HYOg/viewform?embedded=true`,
  [Lang.ru]: `https://docs.google.com/forms/d/e/1FAIpQLSehLzeMzMjjTIDxRvL1kCbJD9ZPOoJXBYg5mBAZX7nixyJ5jg/viewform?embedded=true`,
  [Lang.se]: `https://docs.google.com/forms/d/e/1FAIpQLSe3NUEPm3qJGBnbJY0mxYK30vGaKggkBLfrM4WvNhP25idudg/viewform?embedded=true`,
  [Lang.pt]: `https://docs.google.com/forms/d/e/1FAIpQLSe1Lz8axQeZmTV0SmN1t8w5BJZFveySwzWattDHmDo680SLlw/viewform?embedded=true`,
}

export const RegistrationForm: React.FC = React.memo(() => {
  const lang = useContext(LanguageContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.deadlineTitle}>
        {translate(translations[lang].registrationDeadline, "01/03/2020")}
      </h1>
      <iframe
        className={styles.form}
        src={`${langToFormMap[lang]}&hl=${lang}`}
        height="1500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        lang={lang}
        title="loadScreen"
      >
        Loading…
      </iframe>
    </div>
  );
});

export default RegistrationForm;
