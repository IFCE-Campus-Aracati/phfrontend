import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${theme.colors.blue.light};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.background.primary};
  }

 body, input, textarea, button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`;