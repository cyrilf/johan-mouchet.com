// @flow

import * as React from "react";
import cx from "classnames";
import "./alert.scss";

type Props = {
  type?: string,
  hidden: boolean,
  closable?: boolean,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  },
  children?: Node
};

const Alert = (props: Props) => {
  const { type, hidden, closable, metadata = {}, children } = props;

  const AlertClass = cx(
    "o-alert",
    metadata.contextClass,
    metadata.additionalClasses
  );

  let icon = type => {
    switch (type) {
      case "info":
        icon = "info";
        break;
      case "success":
        icon = "check_circle";
        break;
      case "warning":
        icon = "warning";
        break;
      case "danger":
        icon = "error";
        break;
      default:
        icon = "info";
    }
  };

  return (
    <div
      className={`${AlertClass} o-alert--${type} ${!hidden &&
        "is--visible"} ${closable && "js-alert"} wow`}
    >
      <i className="o-alert__icon material-icons">{icon}</i>
      <div className="o-alert__content">{children}</div>
      {closable && (
        <button className="o-alert__close js-alert-close">&#x2716;</button>
      )}
    </div>
  );
};

Alert.defaultProps = {
  type: "info"
};

export default Alert;
