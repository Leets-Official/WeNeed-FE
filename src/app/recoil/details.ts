import { atom } from 'recoil';

export const heartedPostState = atom<boolean>({
  key: 'heartedPostState',
  default: false,
});

export const bookmarkedPostState = atom<boolean>({
  key: 'bookmarkedPostState',
  default: false,
});

export const heartCountState = atom<number>({
  key: 'heartedCountState',
  default: 0,
});

export const bookmarkCountState = atom<number>({
  key: 'bookmarkedCountState',
  default: 0,
});
