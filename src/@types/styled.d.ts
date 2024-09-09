import 'styled-components'
import { type DefaultThemes } from '../styles/theme/default'

type ThemeType = typeof DefaultThemes

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}