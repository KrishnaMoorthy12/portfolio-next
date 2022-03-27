export const themeValues: ITheme = {
  colors: {
    primary: {
      light: '#9f55ff',
      main: '#8b31ff',
      dark: '#7000ff',
    },
    pureWhite: '#000000',
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
  fonts: {
    display: ['Metropolis', 'sans-serif'].join(', '),
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'].join(', '),
    icon: ['Icomoon', 'sans-serif'].join(', '),
    logo: ['Logo', 'sans-serif'].join(', '),
  },
  sizes: {},

  util: {
    getSystemColorScheme: (): ColorScheme =>
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  },
};

export interface ITheme {
  colors: {
    primary: {
      light: string;
      main: string;
      dark: string;
    };
    pureWhite: string;
    white: string;
    black: string;
    slate: {
      lightest: string;
      lighter: string;
      light: string;
      dark: string;
      darker: string;
      darkest: string;
      deepDark: string;
      extraDark: string;
    };
    tomato: string;
    emerald: string;
  };
  fonts: {
    display: string;
    mono: string;
    icon: string;
    logo: string;
  };
  sizes: {};
  util: {
    getSystemColorScheme: () => ColorScheme;
  };
}

export type ColorScheme = 'light' | 'dark';
