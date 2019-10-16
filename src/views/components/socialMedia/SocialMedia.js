// @flow

import * as React from "react";
import "./social-media.scss";

type Props = {
  medias: [
    {
      name: string,
      URL: string,
      icon: string
    }
  ]
};

const SocialMedia = (props: Props) => {
  const { prop1, prop2 } = props;

  return (
    props.medias && (
      <div className="grid">
        {props.medias.map(media => (
          <div className="c-social-media cell cell--6-@xs cell--4-@sm cell--12-@md">
            <a
              className="c-social-media__link"
              href={media.URL}
              title={`Follow me on ${media.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {media.icon}
              {media.name}
            </a>
          </div>
        ))}
      </div>
    )
  );
};

SocialMedia.defaultProps = {
  prop1: 2
};

export default SocialMedia;
