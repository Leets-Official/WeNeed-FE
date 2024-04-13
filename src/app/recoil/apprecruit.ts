import { atom } from 'recoil';

export const appMenuState = atom({
  key: 'appMenuState',
  default: '모집글',
});

export const isPatchState = atom({
  key: 'isPatchState',
  default: false,
});

export const pendingListState = atom<SelectedStateApllication[]>({
  key: 'pendingListState',
  default: [],
});

export const refusedListState = atom<SelectedStateApllication[]>({
  key: 'refusedListState',
  default: [],
});

export const acceptedListState = atom<SelectedStateApllication[]>({
  key: 'acceptedListState',
  default: [],
});

export const selectedAllListState = atom({
  key: 'selectedAllListState',
  default: {
    pending: false,
    accepted: false,
    refused: false,
  },
});

export const selectedListItems = atom({
  key: 'selectedListItems',
  default: {
    pending: [] as SelectedStateApllication[],
    accepted: [] as SelectedStateApllication[],
    refused: [] as SelectedStateApllication[],
  },
});
