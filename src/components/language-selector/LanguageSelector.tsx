import React from "react";
import cx from "classnames";
import styles from "./languageSelector.module.scss";
import { Lang } from "../../context";

interface LanguageSelectorProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const getFlagFromContext = (lang: Lang) => {
  const isWindows = window.navigator.userAgent.includes("Windows");
  switch(lang) {
    case Lang.en:
      return <span role="img" className={cx(styles.flag, isWindows && styles.windows)} aria-label="british-flag">🇬🇧</span>;
    case Lang.pt:
      return <span role="img" className={cx(styles.flag, isWindows && styles.windows)} aria-label="portuguese-flag">🇵🇹</span>;
    case Lang.se:
        return <span role="img" className={cx(styles.flag, isWindows && styles.windows)} aria-label="swedish-flag">🇸🇪</span>;
    case Lang.lv:
      return <span role="img" className={cx(styles.flag, isWindows && styles.windows)} aria-label="latvian-flag">🇱🇻</span>;
    case Lang.ru:
      return <span role="img" className={cx(styles.flag, isWindows && styles.windows)} aria-label="russian-flag">🇷🇺</span>;
    default:
      return null;
  }
}

const renderButtons = ({ lang, setLang }: LanguageSelectorProps) => {
  return Object.keys(Lang).map((language, key) => {
    return (
      <button
        className={cx(styles.langButton, language === lang && styles.active)}
        name={language}
        onClick={e => setLang(e.currentTarget.name as Lang)}
        key={key}
      >
        {getFlagFromContext(language as Lang)}
      </button>
    );
  });
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  return (
    <header className={styles.header}>
      {renderButtons(props)}
    </header>
  );
}
