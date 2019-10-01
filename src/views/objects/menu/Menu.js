// @flow

import * as React from "react";
import cx from "classnames";
import "./menu.scss";
import { Button } from "../";

// TODO: {% import _self as menu %}

type Props = {
  menu: array,
  [menu[0].text]: string,
  [menu[0].button]: string,
  [menu[0].url]: string,
  [menu[0].metadata.additionalClasses]: array,
};

// TODO: "isSubmenu" was passed in the macro

const Menu = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const MenuClass = cx({
	  'o-menu': !isSubmenu,
	  'o-menu__submenu': isSubmenu,
	});
  
	return (
	<ul className={MenuClass}>
		{/* TODO: fix %for (.filter()?) */}
		{% for item in props.menu if item.text || item.button %}
			<li className={`o-menu__item ${ item.menu && 'o-menu__item--has-children' } ${ item.metadata.additionalClasses|additionalClasses}`}>
				{% if item.text %}
					<a className={`o-menu__link ${ item.menu && 'o-menu__submenu-heading'}`} {% if item.url %}href={item.url|raw}{% else %}tabindex="0"{% endif %}>
						{- item.text|raw -}
					</a>
				{% elseif item.button %}
					<Button props={item.button} />
				{% endif %}

				{% if item.menu %}
					<Menu props={item, true }/>
				{% endif %}
			</li>
		{% endfor %}
	</ul>
  );
};

Menu.defaultProps = {
  prop1: 2
};

export default Menu;
