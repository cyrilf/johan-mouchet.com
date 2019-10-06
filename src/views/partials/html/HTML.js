// @flow

import * as React from "react";
import { PATHS } from "../../../constants/paths";

type Props = {
  metadata: {
    title: string,
    description: string,
    id: string
  }
};

const HTML = (props: Props, children) => {
  const { metadata } = props;

  return (
    <>
      <html lang="en" className="no-js">
        <head>
          <title>{metadata.title}</title>
          <meta charset="UTF-8" />

          <meta name="description" content={metadata.description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:site_name" content="Johan Mouchet" />
          <meta property="og:description" content={metadata.description} />
          <meta
            property="og:image"
            content={`${PATHS.img}theme/og-image.jpg`}
          />
          {/* <meta property="og:url" content="" /> */}

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* JS detection */}
          <script>
            {
              (document.documentElement.className = document.documentElement.className.replace(
                /\bno-js\b/,
                "js"
              ))
            }
          </script>
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Abril+Fatface|Material+Icons"
            rel="stylesheet"
          />
          {/* Stylesheet */}
          <link
            rel="stylesheet"
            type="text/css"
            href={`${PATHS.css}style.css`}
          />

          {/* Favicon */}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={`${PATHS.img}theme/favicon.gif`}
          />
        </head>
        <body id={`page-${metadata.id}`}>
          {children}

          {/* TODO: Import WOW.js */}
          {/* Wow.js */}
          {/* <script src={`${PATHS.js}vendors/wow.js`} />
          <script>{new WOW().init()}</script> */}

          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-48120304-1"
          />
          {/* TODO: Check gtag */}
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);
              gtag('js', new Date());
              gtag('config', 'UA-48120304-1');
            `}
          </script>
        </body>
        {`<!-- (∅‿∅) Hi -->`}
      </html>
    </>
  );
};

export default HTML;
