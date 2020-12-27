import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const globalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}
      * {
        box-sizing: border-box;
      }

      ul,
      li,
      p {
        padding: 0;
        margin: 0;
      }

      html,
      body {
        background: white;
        min-height: 100%;
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
      }
    `}
  />
);
