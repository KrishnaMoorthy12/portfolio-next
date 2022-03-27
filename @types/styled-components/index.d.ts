import 'styled-components';
import { ITheme } from '../../base/theme/values';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
