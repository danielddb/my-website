import { DefaultTheme } from 'styled-components';

export interface Palettes {
  base: DefaultTheme;
  accent: DefaultTheme;
}

export interface Themes {
  light: Palettes;
}

export const themes: Themes = {
  light: {
    accent: {
      background: '#9501b5',
      backgroundAlternate: '#620376',
      icon: '#fff',
      link: '#fff',
      text: '#fff'
    },
    base: {
      background: '#fff',
      backgroundAlternate: '#eee',
      icon: '#9501b5',
      link: '#9501b5',
      text: '#1f2d3d'
    }
  }
};

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

export const breakpoints: Breakpoints = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 480
};

export const rootFontSize = 16;
export const rootLineHeightScale = 1.4;
export const rootLineHeight = rootFontSize * rootLineHeightScale;
export const rootScale = 1.618;
