import { createGlobalStyle } from 'styled-components';

import '@/assets/fonts/generator/generator.css';
import '@/assets/fonts/inter/inter.css';
import '@/assets/fonts/namu/namu.css';
import '@/assets/fonts/roboto/roboto.css';

export const GlobalStyle = createGlobalStyle`

  body {
    touch-action: none;
    margin: 0;
    background: ${({ theme }) => theme.colors.background.body};
    font-family: Roboto;
  }

  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    margin: 0;
  }
`;
