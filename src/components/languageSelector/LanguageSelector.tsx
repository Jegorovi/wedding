import React from "react";
import cx from "classnames";
import styles from "./languageSelector.module.scss";
import { Lang } from "../../context";

interface LanguageSelectorProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const getFlagFromContext = (lang: Lang) => {
  switch(lang) {
    case Lang.en:
      return <span role="img" className={styles.flag} aria-label="british-flag">🇬🇧</span>;
    case Lang.pt:
      return <span role="img" className={styles.flag} aria-label="portuguese-flag">🇵🇹</span>;
    case Lang.se:
        return <span role="img" className={styles.flag} aria-label="swedish-flag">🇸🇪</span>;
    case Lang.lv:
      return <span role="img" className={styles.flag} aria-label="latvian-flag">🇱🇻</span>;
    case Lang.ru:
      return <span role="img" className={styles.flag} aria-label="russian-flag">🇷🇺</span>;
    default:
      return null;
  }
}

const renderButtons = ({ lang, setLang }: LanguageSelectorProps) => {
  return Object.keys(Lang).map((language, key) => (
    <button
      className={cx(styles.langButton, language === lang && styles.active)}
      name={language}
      onClick={e => setLang(e.currentTarget.name as Lang)}
      key={key}
    >
      {getFlagFromContext(language as Lang)}
    </button>
  ));
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  return (
    <header className={styles.header}>
      {renderButtons(props)}
    </header>
  );
}
