// @flow

import * as React from "react";
import cx from "classnames";
import "./Loader.scss";

type Props = {
  size?: "sm",
  className?: string | Array<string> | Object,
};

const Loader = ({ size, className }: Props) => {
  const classNames = cx("o-loader", size && `o-loader--${size}`, className);

  return <div className={classNames}></div>;
};

export default Loader;
