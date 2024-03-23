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
    sharedText: '',
    thumbnail: '',
  },
});

export const crewRecruiterState = atom<null>({
  key: 'crewRecruiterState',
  default: null,
});

export const imageBlobState = atom<BlobImages[]>({
  key: 'imageBlobState',
  default: [],
});

export const fileBlobState = atom<BlobFiles[]>({
  key: 'fileBlobState',
  default: [],
});

export const fileSizeState = atom<number>({
  key: 'fileSizeState',
  default: 0,
});
