import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    margin: 0;
    padding: 0;

  }
  body, html {
    background-color: #ffffff;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }
  *:focus-visible {
    outline: 3px solid #000000;
    outline-offset: .2rem;
    border-radius: 4px;
  }
`;

export default GlobalStyle;
