import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeValues } from './values';

export function ThemeEngine({ children }: ThemeEngineProps) {
  return <ThemeProvider theme={themeValues}>{children}</ThemeProvider>;
}

ThemeEngine.getSystemColorScheme = () => themeValues.util.getSystemColorScheme;

ThemeEngine.getRawValues = () => {
  const { util, ...values } = themeValues;
  return { ...values };
};

type ThemeEngineProps = { children: ReactNode };
