import GlobalStyle from "./styles/GlobalStyle";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
