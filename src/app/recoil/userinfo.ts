import { atom } from 'recoil';

export const univAuthEmailState = atom<string>({
  key: 'univAuthEmailState',
  default: '',
});

export const univAuthCodeState = atom<string>({
  key: 'univAuthCodeState',
  default: '',
});

export const univAuthState = atom<boolean>({
  key: 'univAuthState',
  default: false,
});

export const userInfoState = atom<userInfo>({
  key: 'userInfoState',
  default: {
    userInfoState: false,
    nickname: '',
    major: '',
    doubleMajor: '',
    interestField: '',
    grade: '',
  },
});
