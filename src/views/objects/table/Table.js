// @flow

import * as React from "react";
import cx from "classnames";
import "./Table.scss";

type Props = {
  align?: "top" | "bottom",
  equalColumns?: boolean,
  vertical?: boolean,
  variant?: "striped",
  hover?: boolean,
  size?:
    | "sm"
    | "sm-vertical"
    | "sm-horizontal"
    | "lg"
    | "lg-vertical"
    | "lg-horizontal",
  responsive?: boolean,
  className?: string | Array<string> | Object,
  attributes?: boolean | number | string,
  children: Node,
};

const Table = ({
  align,
  equalColumns,
  vertical,
  variant,
  hover,
  size,
  responsive,
  className,
  children,
  ...attributes
}: Props) => {
  const classNames = cx(
    "o-table",
    align && `o-table--align-${align}`,
    equalColumns && "o-table--equal-columns",
    vertical && "o-table--vertical",
    variant && `o-table--${variant}`,
    hover && !vertical && "o-table--hover",
    size && `o-table--${size}`,
    responsive && "o-table--responsive-@md",
    className
  );

  return <table className={classNames}>{children}</table>;
};

export default Table;
