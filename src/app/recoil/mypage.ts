import { atom } from 'recoil';

export const menuState = atom({
  key: 'menuState',
  default: 'MY OUTPUT',
});

export const selectedMypageCategoriesState = atom({
  key: 'selectedMypageCategoriesState',
  default: ['전체'],
});
