export const USER_PREVIEW = {
  userId: 999,
  nickname: '사용자',
  sameUser: false,
  hearted: true,
  bookmarked: true,
  profile: '',
};

export const WRITER_PREVIEW = {
  userId: 999,
  writerNickname: '사용자',
  nickname: '사용자',
  major: '000학과',
  profile: '',
  grade: 0,
};

export const PORTFOLIO_PREVIEW = {
  thumbnail: '',
  title: '게시물 제목',
  createdAt: '',
  heartCount: 999,
  viewCount: 999,
  bookmarkCount: 999,
  links: [],
  files: [],
  skills: ['기술1', '기술2'],
  tags: ['마케팅', 'UXUI', 'AI'],
  writer: WRITER_PREVIEW,
  contents: [],
  teamMembers: [],
};
