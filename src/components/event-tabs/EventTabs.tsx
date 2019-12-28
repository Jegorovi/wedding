import React, { useContext } from "react";
import Tabs from "antd/lib/tabs"
import { LanguageContext } from "../../context";
import { translations } from "../../i18t";

import styles from "./EventTabs.module.scss";

export const EventTabs: React.FC = () => {
  const lang = useContext(LanguageContext);

  return (
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
  );
}

export default EventTabs;
