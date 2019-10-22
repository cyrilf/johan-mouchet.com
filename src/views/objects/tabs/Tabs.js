// @flow

import * as React from "react";
import cx from "classnames";
import "./tabs.scss";

type Props = {
  tabs: [
    {
      thumb: string,
      panel: string
    }
  ],
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Tabs = (props: Props) => {
  const { tabs, metadata = {} } = props;

  const TabsClass = cx(
    "o-tabs",
    metadata.contextClass,
    metadata.additionalClasses,
    "js-tabs"
  );

  return !tabs ? null : (
    <div className={TabsClass}>
      <ul className="o-tabs__thumbs">
        {tabs.map((tab, index) => (
          <li
            className="o-tabs__thumb js-tabs-thumb wow fadeInUp"
            data-wow-delay={index > 0 && index * 0.15 + "s"}
            key={tab.thumb}
          >
            <button className="o-tabs__button">{tab.thumb}</button>
          </li>
        ))}
      </ul>
      <ul className="o-tabs__panels">
        {tabs.map((tab, index) => (
          <li className="o-tabs__panel js-tabs-panel" key={index}>
            {tab.panel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
