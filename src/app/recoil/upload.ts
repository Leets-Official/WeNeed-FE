import { atom } from 'recoil';

export const uploadState = atom<DndTextTypes[]>({
  key: 'uploadState',
  default: [],
});
