import { atom } from 'recoil';

const themeState = atom({
  key: 'isDarkTheme',
  default: false,
});

export default themeState;

