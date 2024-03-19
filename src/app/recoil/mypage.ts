import { atom } from 'recoil';

export const menuState = atom({
  key: 'menuState',
  default: 'MY OUTPUT',
});

export const crewTypeState = atom({
  key: 'crewTypeState',
  default: '',
});

export const selectedMypageCategoriesState = atom({
  key: 'selectedMypageCategoriesState',
  default: ['전체'],
});

export const userProfileInfoSatate = atom({
  key: 'userProfileInfoSatate',
  default: {
    userNickname: '',
    sameUser: false,
    userInfo: {
      profile: '',
      nickname: '',
      major: '',
      userGrade: 0,
      doubleMajor: '',
      interestFiled: '',
      email: '',
      lnks: [''],
      selfIntro: '',
    },
  },
});
