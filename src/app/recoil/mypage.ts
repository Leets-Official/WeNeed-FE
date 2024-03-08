import { atom } from 'recoil';

export const menuState = atom({
  key: 'menuState',
  default: '',
});

export const selectedCategoriesState = atom({
  key: 'selectedCategoriesState',
  default: ['전체'],
});
