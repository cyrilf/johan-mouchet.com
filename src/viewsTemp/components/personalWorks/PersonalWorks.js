// @flow

import * as React from "react";
import cx from "./node_modules/classnames";
import "./___.scss";

/**
 * Personal Works
 *
 * @param {array}   works                  - List of works
 * @param {boolean} works[0].video         - True if work type is video
 * @param {array}   works[0].thumbnailPath - Work thumbnail image path
 * @param {array}   works[0].expandedPath  - Work expanded image path
 */

const ___ = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx("___", {
    "___--prop1": prop1
  });

  return (
    <div className="c-personal-works">
      <div className="grid">
        {props.works.map(work => (
          <div className="cell cell--6-@xs cell--4-@sm cell--2-@md">
            <section className="c-personal-work">
              <a
                className="c-personal-work__overlay"
                href={work.URL}
                target="_blank"
              >
                <img
                  className="c-personal-work__thumbnail"
                  src={work.thumbnailPath}
                  alt="Personal work"
                />
                {work.sourceIconPath && (
                  <span className="c-personal-work__source">
                    {file_get_contents(work.sourceIconPath) | raw}
                  </span>
                )}
              </a>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;