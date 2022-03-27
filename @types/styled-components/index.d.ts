import 'styled-components';
import { ITheme } from '../../base';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
