import React, { useState } from "react";
import Tabs from "antd/lib/tabs"

import { LanguageContextProvider, Lang } from "../../context";
import { LanguageSelector } from "../languageSelector/LanguageSelector";
import { Invitation } from "../invitation/Invitation";
import { Section } from "../section/Section";
import { translations } from "../../i18t";

import styles from "./App.module.scss";
import { Cards } from "../cards/cards";

const langToFormMap = {
  [Lang.en]: `https://docs.google.com/forms/d/e/1FAIpQLSedtDtJtYlc119OgXm4djHMnDzSzMIbsmSCyCckTJJKQ6qA2w/viewform?embedded=true`,
  [Lang.lv]: `https://docs.google.com/forms/d/e/1FAIpQLSdB_5UrAkg0xeh02cjs2AkdHsewwe0yobFWzf7KKFP3U6HYOg/viewform?embedded=true`,
  [Lang.ru]: `https://docs.google.com/forms/d/e/1FAIpQLSehLzeMzMjjTIDxRvL1kCbJD9ZPOoJXBYg5mBAZX7nixyJ5jg/viewform?embedded=true`,
  [Lang.se]: `https://docs.google.com/forms/d/e/1FAIpQLSe3NUEPm3qJGBnbJY0mxYK30vGaKggkBLfrM4WvNhP25idudg/viewform?embedded=true`,
  [Lang.pt]: `https://docs.google.com/forms/d/e/1FAIpQLSe1Lz8axQeZmTV0SmN1t8w5BJZFveySwzWattDHmDo680SLlw/viewform?embedded=true`,
}

export const App: React.FC = () => {
  const [lang, setLang] = useState(Lang.en);

  return (
    <LanguageContextProvider value={lang}>
      <div className={styles.app}>
        <LanguageSelector lang={lang} setLang={setLang}/>
        <Section color="#fdcb6e">
          <div className={styles.invitationSection}>
            <Invitation lang={lang}/>
          </div>
        </Section>
        <Section>
          <div className={styles.eventCardsContainer}>
            <Tabs size="small" tabBarGutter={0} tabPosition="left">
              <Tabs.TabPane tab={translations[lang].latviaEventShort} key="1">
                {translations[lang].latviaEventDesc}
              </Tabs.TabPane>
              <Tabs.TabPane tab={translations[lang].finlandEventShort} key="2">
                {translations[lang].finlandEventDesc}
              </Tabs.TabPane>
              <Tabs.TabPane tab={translations[lang].portugalEventShort} key="3">
                {translations[lang].portugalEventDesc}
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Section>
        <Section color="#f8f8f8">
          <Cards />
        </Section>
        <Section >
          <iframe
            src={`${langToFormMap[lang]}&hl=${lang}`}
            width="640"
            height="1500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            lang={lang}
            title="loadScreen"
          >
            Loading…
          </iframe>
        </Section>
      </div>
    </LanguageContextProvider>
  );
}
