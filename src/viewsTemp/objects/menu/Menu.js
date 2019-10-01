// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";
import { Button } from "../";

// TODO: {% import _self as menu %}

/**
 * Menu
 *
 * @param {array}  menu                                 - List of menu item
 * @param {string} [menu[0].text]                       - Menu item type link
 * @param {string} [menu[0].button]                     - Menu item type button (using o-button)
 * @param {string} [menu[0].url]                        - Menu item link URL
 * @param {array}  [menu[0].metadata.additionalClasses] - Menu item additional classes
 */

// TODO: "isSubmenu" was passed in the macro

const ___ = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "___",
	  {
		"___--prop1": prop1
	  }
	);
  
	return (
	<ul className={!isSubmenu ? 'o-menu' : 'o-menu__submenu'}>
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

___.defaultProps = {
  prop1: 2
};

export default ___;