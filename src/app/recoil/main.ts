import { atom } from 'recoil';

export const selectedCategories = atom<string[]>({
  key: 'selectedCategoriesState',
  default: [],
});
