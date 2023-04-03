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

  :root {
    --btn-black: #000000;
    --btn-primary: #CEFED2;
    --btn-primary-hover: #85ff90;
    --btn-primary-active: #6ed477;
    --btn-secondary: #E3CCFF;
    --btn-secondary-hover: #c89cff;
    --btn-secondary-active: #9f7dc9;
    --btn-text: #252525;
    --btn-text-hover: #9B9B9B;
    --btn-text-active: #9B9B9B;
    --btn-danger: #E42222;
    --btn-danger-hover: #fc5d5d;
    --btn-danger-active: #c73e3e;
    --btn-disabled: #e0e0e0;
    --btn-disabled-text: #575757;
    --btn-disabled-hover: #c4c4c4;
    --box-shadow: 5px 5px 0px 1px rgba(0,0,0,1);
  }
  
  body,
  html {
    background-color: #ffffff;
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
  }
`;

export default GlobalStyle;
