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

  body,
  html {
    background-color: #f1f1f1;
    margin: 0;
    padding: 0;
    font-size: 16px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box; 
    *::-moz-selection { /* Code for Firefox */
      background: #9e9e9e50;
    }
    *::selection {
      background: #9e9e9e50;
    }
    *:focus:not(:focus-visible) {
    outline: none;
    }
  *:focus-visible {
    outline: none;
    }
  }

`;

export default GlobalStyle;
