import React, { useState } from "react";
import styles from "./App.module.scss";
import { LanguageContextProvider, Lang } from "../../context";
import { LanguageSelector } from "../languageSelector/LanguageSelector";
import { Invitation } from "../invitation/Invitation";
import { Section } from "../section/Section";

export const App: React.FC = () => {
  const [lang, setLang] = useState(Lang.en);

  return (
    <LanguageContextProvider value={lang}>
      <div className={styles.app}>
        <LanguageSelector lang={lang} setLang={setLang}/>
        <Section color="green">
          <div className={styles.invitationSection}>
            <img src={process.env.PUBLIC_URL + "./happyImg.jpg"} className={styles.happyImg} alt="Happy Sara and Roland"/>
            <Invitation lang={lang}/>
          </div>
        </Section>
      </div>
    </LanguageContextProvider>
  );
}
