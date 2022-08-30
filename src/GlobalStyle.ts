import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
   padding:0;
   margin:0; 
   font-family: Arial, Helvetica, sans-serif;
  }
@font-face {
    font-family: 'razerf5bold';
    src: url('./fonts/razerf5-bold-webfont.woff2') format('woff2'),
         url('./fonts/razerf5-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'razerf5light';
    src: url('./fonts/razerf5-light_0-webfont.woff2') format('woff2'),
         url('./fonts/razerf5-light_0-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'razerf5italic';
    src: url('./fonts/razerf5-regitalic-webfont.woff2') format('woff2'),
         url('./fonts/razerf5-regitalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'razerf5thin';
    src: url('./fonts/razerf5-thin-webfont.woff2') format('woff2'),
         url('./fonts/razerf5-thin-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}`;
