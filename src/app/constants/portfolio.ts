export const FILE_TYPE_LIST = [
  '텍스트',
  '이미지',
  '문서',
  '비디오',
  '오디오',
  '링크',
] as const;

export const SIDENAV_ITEM_NAME = ['미리보기', '업로드', '팀원 추가'] as const;

export const INTERESTED_FIELD_LIST = [
  '기획',
  '디자인',
  '미디어',
  '예술',
  'IT',
] as const;

export const MEDIA_LIST = ['광고', '마케팅', '방송', '사진/영상'];
export const DESIGN_LIST = [
  '그래픽',
  'BXBI',
  'UXUI',
  '영상',
  '3D',
  '모션',
  '애니메이션',
  '제품',
  '인테리어',
  '패션',
];
export const ART_LIST = ['문화', '연기', '음악', '무용', '조소', '회화'];
export const IT_LIST = ['AI', '데이터', '게임', '웹', '앱', '보안'];
export const PLANNING_LIST = ['아이디어', '브랜딩', '창업'];

export const INTERESTED_FIELD_WITH_TAGS: InterestedFieldWithTags = {
  미디어: MEDIA_LIST,
  디자인: DESIGN_LIST,
  예술: ART_LIST,
  IT: IT_LIST,
  기획: PLANNING_LIST,
} as const;

export const INTERESTED_TAG_LIST = [
  '광고',
  '마케팅',
  '방송',
  '사진/영상',
  '아이디어',
  '브랜딩',
  '창업',
  '그래픽',
  'BXBI',
  'UXUI',
  '영상',
  '3D',
  '모션',
  '애니메이션',
  '제품',
  '인테리어',
  '패션',
  '문화',
  '연기',
  '음악',
  '무용',
  '조소',
  '회화',
  'AI',
  '데이터',
  '게임',
  '웹',
  '앱',
  '보안',
] as const;

export const DETAIL_MENU_BAR = {
  프로필: 'profile',
  크루제안: 'crew_plus',
  좋아요: 'likeInDetail',
  북마크: 'bookmarkInDetail',
  댓글: 'comments',
  공유: 'share',
} as const;
