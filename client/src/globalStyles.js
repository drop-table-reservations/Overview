import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  @font-face {
    font-family: "BrandonText";
    src: url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff2) format("truetype");
  }

  ${reset}
`;