import { createGlobalStyle } from 'styled-components';
import { AlurakutStyles } from '../lib/AlurakutCommons';

export const GlobalStyle = createGlobalStyle`
   /* Reset CSS (Necolas Reset CSS <3) */
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${props => `${props.theme.colors.backgroundPrimary}`};
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`
