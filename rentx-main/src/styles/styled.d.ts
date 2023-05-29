import 'styled-components'
import theme from './theme'

declare module 'styled-components'{
    type ThemeType = typeof theme; //declara a mesma tipagem do theme.ts
    //o styled component procura o DefaultTheme ao procurar os temas
    export interface DefaultTheme extends ThemeType{}
}