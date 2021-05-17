import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, 
  *:after,
  *:before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;

      -ms-overflow-style: none;
      scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  button {
    cursor: pointer;
  }

  body {
      height: 100vh;
      width: 100vw;

      font-size: 62.5%;
      list-style-type: none;

      overflow: auto;

      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
