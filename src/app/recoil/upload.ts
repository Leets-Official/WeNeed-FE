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

export const imageForm = atom<FormData>({
  key: 'imageFormState',
  default: new FormData(),
});

export const fileForm = atom<FormData>({
  key: 'fileFormState',
  default: new FormData(),
});

export const thumbnailForm = atom<FormData>({
  key: 'thumbnailFormState',
  default: new FormData(),
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
