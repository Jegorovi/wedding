import React, { useState } from "react";

import { LanguageContextProvider, Lang } from "../../context";
import { LanguageSelector } from "../languageSelector/LanguageSelector";
import { Invitation } from "../invitation/Invitation";
import { Section } from "../section/Section";

import styles from "./App.module.scss";

const LazyTabs = React.lazy(() => import("../event-tabs/EventTabs"));
const LazyCards = React.lazy(() => import("../cards/cards"));
const LazyRegistrationForm = React.lazy(() => import("../registration-form/RegistrationForm"));

export const App: React.FC = React.memo(() => {
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
        <React.Suspense fallback={null}>
          <Section>
            <LazyTabs />
          </Section>
        </React.Suspense>
        <React.Suspense fallback={null}>
          <Section color="#f8f8f8">
            <LazyCards />
          </Section>
        </React.Suspense>

        <React.Suspense fallback={null}>
          <Section>
            <LazyRegistrationForm />
          </Section>
        </React.Suspense>
      </div>
    </LanguageContextProvider>
  );
});
