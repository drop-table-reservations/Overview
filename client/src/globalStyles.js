import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "BrandonText";
    src: url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff2) format("truetype");
  }

  body {
    margin: 0;
  }
`;