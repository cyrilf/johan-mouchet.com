// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Breadcrumb
 *
 * @param {string} levels.title                 - Breadcrumb level title
 * @param {string} levels.url                   - Breadcrumb title relative url
 * @param {string} [metadata.contextClass]      - Breadcrumb context class
 * @param {array}  [metadata.additionalClasses] - Breadcrumb additional classes
 */

// TODO: "context" was passed in the macro

const ___ = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx(
    "o-breadcrumb",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "___--prop1": prop1
    }
  );

  const lastLevel = levels.length + 1;

  return (
    <Fragment>
      <ol className={___Class}>
        {props.levels.map((level, index) => (
          <li
            className={`${"o-breadcrumb__level" |
              contextClass(contextClass)} wow fadeInUp`}
            data-wow-delay={index > 0 && (index * 0.15)`s`}
          >
            <a
              className={"o-breadcrumb__link" | contextClass(contextClass)}
              href={level.url && !lastLevel}
            >
              {level.title}
            </a>
          </li>
        ))}
      </ol>
      // TODO: fix %for
      {/* <pre> */}
      <script type="application/ld+json">
        {`
			"@context": "http://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				${props.levels.map(
          (level, index) =>
            ({
              "@type": "ListItem",
              position: index,
              item: {
                "@type": "Thing",
                "@id": `${context._SITE["hosturl"]}${context._SITE["baseurl"]}${
                  level === lastLevel ? context._SITE["rurl"] : level.url
                }`,
                name: level.title
              }
            }(index !== lastLevel) && ",")
        )}
			]
		`}
      </script>
      {/* </pre> */}
    </Fragment>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;