import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;

  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(${({ theme }) => theme.colors.primary.dark}, 0.05);
}

html {
  font-size: 62.5%;
  font-family: ${({ theme }) => theme.fonts.display};
  scroll-behavior: smooth;
  // overflow: overlay;
}

body {
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.pureWhite};
  color: ${({ theme }) => theme.colors.slate.extraDark};

  @include theme(dark) {
    background-color: ${({ theme }) => theme.colors.slate.extraDark};
    color: ${({ theme }) => theme.colors.pureWhite};
  }
}

::selection {
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.slate.lightest};

  @include theme(dark) {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
}

::-webkit-scrollbar {
  width: 0.8rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(${({ theme }) => theme.colors.primary.dark}, 0.75);
  opacity: 0.5;
  border-radius: 1rem;
  transition: all 0.2s;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(${({ theme }) => theme.colors.primary.dark}, 1);
  opacity: 1;
}
`;
