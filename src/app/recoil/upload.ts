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

export const userId = atom<number[]>({
  key: 'userIdFormState',
  default: [],
});

export const uploadForm = atom<FormData>({
  key: 'uploadFormState',
  default: new FormData(),
});

export const uploadDataState = atom<UploadPFTypes>({
  key: 'uploadDataState',
  default: {
    articleType: 'PORTFOLIO',
    title: '',
    content: [],
    skills: [],
    tags: [],
    teamMembersId: [],
  },
});

export const uploadRecruitState = atom<UploadRecruitTypes>({
  key: 'uploadRecruitState',
  default: {
    articleType: 'PORTFOLIO',
    title: '',
    content: [],
    skills: [],
    tags: [],
  },
});

export const uploadDataState = atom<UploadPFTypes>({
  key: 'uploadDataState',
  default: {
    articleType: 'PORTFOLIO',
    title: '',
    content: [],
    skills: '',
    tags: [],
    teamMembersId: [],
  },
});
