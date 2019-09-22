import React, { useState } from "react";
import styles from "./App.module.scss";
import { LanguageContextProvider, Lang } from "../../context";
import { LanguageSelector } from "../languageSelector/LanguageSelector";
import { Invitation } from "../invitation/Invitation";

export const App: React.FC = () => {
  const [lang, setLang] = useState(Lang.en);

  return (
    <LanguageContextProvider value={lang}>
      <div className={styles.app}>
        <LanguageSelector lang={lang} setLang={setLang}/>
        <div className={styles.content}>
          <div className={styles.happyImg}>
          </div>
          <Invitation lang={lang}/>
        </div>
      </div>
    </LanguageContextProvider>
  );
}
