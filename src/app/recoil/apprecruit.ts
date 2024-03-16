import { atom } from 'recoil';

export const appMenuState = atom({
  key: 'appMenuState',
  default: '모집글',
});

export const selectedApplicantsState = atom<ExtendedApplicant[][]>({
  key: 'selectedApplicantsState',
  default: [],
});

export const responseApplicantsListState = atom<Applicant[][]>({
  key: 'responseApplicantsListState',
  default: [],
});

export const pendingListState = atom<ExtendedApplicant[][]>({
  key: 'pendingListState',
  default: [],
});

export const refusedListState = atom<ExtendedApplicant[][]>({
  key: 'refusedListState',
  default: [],
});

export const acceptedListState = atom<ExtendedApplicant[][]>({
  key: 'acceptedListState',
  default: [],
});

export const pendingListSelectedState = atom({
  key: 'pendingListSelectedState',
  default: false,
});

export const refusedListSelectedState = atom({
  key: 'refusedListSelectedState',
  default: false,
});

export const acceptedListSelectedState = atom({
  key: 'acceptedListSelectedState',
  default: false,
});

export const pendingSelectedState = atom<ExtendedApplicant[][]>({
  key: 'pendingSelectedState',
  default: [],
});

export const refusedSelectedState = atom<ExtendedApplicant[][]>({
  key: 'refusedSelectedState',
  default: [],
});

export const acceptedSelectedState = atom<ExtendedApplicant[][]>({
  key: 'acceptedSelectedState',
  default: [],
});

export const acceptAndrefuseState = atom({
  key: 'acceptAndrefuseState',
  default: false,
});
