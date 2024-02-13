import { atom } from 'recoil';

export const selectedCategories = atom<string[]>({
  key: 'selectedCategoriesState',
  default: [],
});

export const selectedSortType = atom<SortTypes>({
  key: 'selectedSortTypeState',
  default: 'DESC',
});
