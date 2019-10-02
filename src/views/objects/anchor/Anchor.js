// @flow

import * as React from "react";
import cx from "./node_modules/classnames";
import "./___.scss";

type Props = {
  context: Array<mixed>,
  tag: string,
  id: string,
  text: string,
  marker: string,
  metadata.contextClass: ?string,
  metadata.attributes: ?object,
};

// TODO: "context" was passed in the macro

const ___ = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "u-anchor",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		"___--prop1": prop1
	  }
	);

	const Tag = props.tag;
  
	return (
		<Tag id={props.id} className={___Class} {...props.metadata.attributes}>
			<a href={`${context._SITE['rurl']}#${props.id}`} className='u-anchor__link'>{ props.marker|default('#') }</a>
			{props.text|raw}
		</Tag>
	);
};

___.defaultProps = {
  prop1: 2
};

export default ___;
