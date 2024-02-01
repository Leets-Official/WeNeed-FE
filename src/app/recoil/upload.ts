import { atom } from 'recoil';

export const filestate = atom<DNDFileTypes[]>({
  key: 'filestate',
  default: [],
});

export const textState = atom<DndTextTypes[]>({
  key: 'textState',
  default: [],
});

export const orderState = atom<number>({
  key: 'orderState',
  default: 0,
});
