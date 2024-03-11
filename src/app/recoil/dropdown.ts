import { atom } from 'recoil';

export const dropdownItemsState = atom<DropdownItems>({
  key: 'dropdownItems',
  default: {
    interestedField: '',
    major: '',
    doubleMajor: '',
    grade: '',
  },
});

export const crewCategoriesState = atom({
  key: 'crewCategories',
  default: '',
});

export const crewMembersState = atom({
  key: 'crewMembers',
  default: 0,
});
