export const text = {
  fileType: '텍스트',
  announcement: '텍스트를 입력해주세요!',
};

export const image = {
  fileType: '이미지',
  sizeLimit: 100000,
  announcement: '이미지 파일을 업로드해주세요!',
  rule: 'PNG, JPEG, JPG, GIF 형식만 첨부 가능합니다!',
  accept: 'image/jpeg,image/jpg,image/png,image/gif',
};

export const docs = {
  fileType: '문서',
  sizeLimit: 100000,
  announcement: '문서 불러오기',
  rule: 'PDF 파일만 가능합니다.\n게시물 하단에 첨부되며 위치 변경이 불가능합니다!',
  accept: '.pdf',
};

export const video = {
  fileType: '영상',
  sizeLimit: 100000,
  announcement: '영상 파일을 업로드해주세요!',
  rule: 'MP4 형식으로만 첨부 가능합니다!\n게시물 하단에 첨부되며 위치 변경이 불가능합니다!',
  accept: 'video/mp4',
};

export const sound = {
  fileType: '음성',
  sizeLimit: 100000,
  announcement: '음성 파일을 업로드해주세요!',
  rule: '사운드클라우드 링크 형식으로만 첨부 가능합니다!',
};

export const link = {
  fileType: '링크',
  sizeLimit: 100000,
  announcement: '링크를 입력하세요!',
};

export const share = {
  fileType: '나누고 싶은 큰 문장',
  announcement: '나누고 싶은 문장을 입력하세요!',
};

export const imgAndVideo = {
  width: 118,
  height: 118,
  className: 'w-[118px] h-[118px] object-cover rounded-[9px]',
};

interface TransType {
  [key: string]: string;
}
export const transType: TransType = {
  text: '텍스트',
  link: '링크',
  sound: '오디오',
  docs: '문서',
  image: '이미지',
  video: '비디오',
  share: '나누고 싶은 문장',
};
