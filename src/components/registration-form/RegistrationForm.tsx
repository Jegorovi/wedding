import React, { useContext } from "react";
import { Lang, LanguageContext } from "../../context";

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
  );
});

export default RegistrationForm;
