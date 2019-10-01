// @flow

import * as React from "react";
import cx from "./node_modules/classnames";
import "./___.scss";

/**
 * Social Media
 *
 * @param {array}  medias 		       - List of medias
 * @param {string} medias[0]name     - media name
 * @param {string} medias[0]URL      - media URL
 * @param {string} medias[0]iconPath - media iconPath
 */

const ___ = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx("___", {
    "___--prop1": prop1
  });

  return (
    <div className="grid">
      {props.medias.map(media => (
        <div className="c-social-media cell cell--6-@xs cell--4-@sm cell--12-@md">
          <a
            className="c-social-media__link"
            href={media.URL}
            title="Follow me on { media.name }"
            target="_blank"
          >
            {file_get_contents(media.iconPath) | raw}
            {media.name}
          </a>
        </div>
      ))}
    </div>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;