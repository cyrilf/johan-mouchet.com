// @flow

import * as React from "react";
import "./PersonalWorks.scss";

type Props = {
  works: [
    {
      url: string,
      thumbnailSrc: string,
      sourceIcon: React.Node,
    }
  ],
};

const PersonalWorks = ({ works }: Props) =>
  !works ? null : (
    <div className="c-personal-works">
      <div className="grid">
        {works.map((work) => (
          <div
            className="cell cell--6-@xs cell--4-@sm cell--2-@md u-vr--bottom-1-@xs u-vr--bottom-0-@md"
            key={work.thumbnailSrc}
          >
            <section className="c-personal-work">
              <a className="c-personal-work__overlay" href={work.url}>
                <img
                  className="c-personal-work__thumbnail"
                  src={work.thumbnailSrc}
                  alt="Personal work"
                  loading="lazy"
                />
                {work.sourceIcon && (
                  <span className="c-personal-work__source">
                    {work.sourceIcon}
                  </span>
                )}
              </a>
            </section>
          </div>
        ))}
      </div>
    </div>
  );

export default PersonalWorks;
