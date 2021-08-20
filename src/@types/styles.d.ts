import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      secondary: string;
      button: string;
      white: string;
    };
  }
}
