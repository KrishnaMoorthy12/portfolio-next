import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const themeValues: ITheme = {
  colors: {
    primary: {
      light: '#9f55ff',
      main: '#8b31ff',
      dark: '#7000ff',
    },
    white: '#f0f0f0',
    black: '#000000',
    slate: {
      lightest: '#dbdbdb',
      lighter: '#aaaaaa',
      light: '#8a8a8a',
      dark: '#323133',
      darker: '#242225',
      darkest: '#1e1b20',
      extraDark: '#1a171e',
      deepDark: '#120e16',
    },
    tomato: '#cf0000',
    emerald: '#00ac56',
  },
  fonts: {},
  sizes: {},

  util: {
    getSystemColorScheme: (): ColorScheme =>
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  },
};

export function ThemeEngine({ children }: ThemeEngineProps) {
  return <ThemeProvider theme={themeValues}>{children}</ThemeProvider>;
}

ThemeEngine.getSystemColorScheme = () => themeValues.util.getSystemColorScheme;

ThemeEngine.getRawValues = () => {
  const { util, ...values } = themeValues;
  return { ...values };
};

type ThemeEngineProps = { children: ReactNode };

export interface ITheme {
  colors: {
    primary: {
      light: string;
      main: string;
      dark: string;
    };
    white: string;
    black: string;
    slate: {
      lightest: string;
      lighter: string;
      light: string;
      dark: string;
      darker: string;
      darkest: string;
      extraDark: string;
      deepDark: string;
    };
    tomato: string;
    emerald: string;
  };
  fonts: {};
  sizes: {};
  util: {
    getSystemColorScheme: () => ColorScheme;
  };
}

export type ColorScheme = 'light' | 'dark';
