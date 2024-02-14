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
