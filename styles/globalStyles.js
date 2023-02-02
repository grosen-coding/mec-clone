import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* ----- VARIABLES ----- */
:root {
  --max-width: 1100px;
  --border-radius: 12px;

  /* --primary-color: blue; */
}

/* ----- VARIABLES ----- */


/* ----- BASE STYLES ----- */

*, *:after, *:before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  /* height: 100vh; */
  overflow-x: hidden;

  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

}

a {
  color: inherit;
  text-decoration: none;
}

button, input, textarea, select {
    font: inherit;
} 

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

img, video, canvas {
    width: 100%;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

button {
    border: none;
    outline: none;
}
/* ----- BASE STYLES ----- */

/* ----- TYPOGRAPHY ----- */
/* ----- TYPOGRAPHY ----- */
`;

export default GlobalStyles;
