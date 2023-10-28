import { create } from '@storybook/theming';
// @ts-ignore
import logo from './assets/header.svg';

export default create({
  base: 'dark',

  colorPrimary: '#E791AF',
  colorSecondary: '#7EC0C8',

  // UI
  appBg: '#313131',
  appContentBg: '#313131',
  appBorderColor: '#4F5157',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#7EC0C8',
  barBg: '#44474C',

  // Form colors
  inputBg: '#44474C',
  inputBorder: '#4F5157',
  inputTextColor: '#ffffff',
  inputBorderRadius: 4,

  brandTitle: 'Motion UI',
  brandUrl: 'https://www.ivan-semin.com',
  brandImage: logo,
  brandTarget: '_self',
});
