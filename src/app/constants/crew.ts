export const HEADER_RECRUITER = {
  type: '간단 지원서 작성',
  title: 'weneed을 통한 크루 제안',
  subtitle: '원하는 크루의 이상향을 말해주세요!',
} as const;

export const HEADER_APPLICANT = {
  type: '간단 지원서 작성',
  title: 'weneed을 통한 크루 제안 작성하기',
  subtitle: '크루 제안으로 함께하세요!',
} as const;

export const HEADER_COMPLETE = {
  title: '간단 크루 지원 모집서 ',
} as const;

export const RECRUITER_QUESTIONS = {
  category: ['대표적인 카테고리를 선택해주세요.', '카테고리'],
  detailTag: '세부분야를 선택해주세요.',
  deadline: [
    '모집 기간을 설정해주세요.',
    '설정한 날짜에 지원서가 마감됩니다. ',
  ],
  description: [
    '하고 있는 프로젝트를 한줄 소개해주세요.',
    '제가 하고 있는 프로젝트는 3D모델링을 하고 있는데요. 모션 영상을 함께 작업하면 너무나 좋을 것 같아서 팀원을 구하고 있어요. 그래서 저와 함께 작업을 할 사  ',
    '30자 이내로 작성해주세요. ',
  ],
  task_need: [
    '어떤 업무를 맡는 크루가 필요하신가요? ',
    '* 30자 이내로 작성해주세요.',
  ],
  member_count: '필요한 크루의 인원수를 입력해주세요.',
  phone: '전화번호를 입력해주세요.',
  crew_questions: '크루를 지원하는 분께 하고 싶은 질문을 작성해주세요.',
  content: '크루를 하고 싶은 분께 하고 싶은 말을 작성해주세요.',
  keywords: '이런 분과 함께 하고 싶어요.',
} as const;

export const APPLICANT_QUESTIONS = {
  name: '이름',
  major: '학과',
  doubleMajor: ['복수전공', '복수 전공인 경우만 작성해주세요.'],
  international: ['내국인', '외국인'], //boolean
  grade: ['학년', '1학년'],
  status: ['학적 상태', '재학'],
  phone: [
    '전화번호를 입력해주세요.',
    '지원서를 열람하는 분만 연락처를 볼 수 있습니다.',
  ],
  available_time: '작업을 할 수 있는 시간대는 언제인가요?',
  about_me: '본인을 표현할 수 있는 한마디를 작성해주세요.',
  appeal: ['어필 할 수 있는 파일을 올려주세요.', '파일'],
  content: '크루를 하고 싶은 분께 하고 싶은 말을 작성해주세요. ',
  keywords: ['저를 표현 할 수 있는 태그를 선택해 주세요.'],
} as const;

export const APPLICANT_COMPLETE = {
  name: '이름',
  major: '학과',
  doubleMajor: ['복수전공', '복수 전공인 경우만 작성해주세요.'],
  international: ['내국인', '외국인'], //boolean
  grade: ['학년', '1학년'],
  status: ['학적 상태', '재학'],
  phone: [
    '전화번호를 입력해주세요.',
    '지원서를 열람하는 분만 연락처를 볼 수 있습니다.',
  ],
  available_time: '작업을 할 수 있는 시간대는 언제인가요?',
  about_me: '본인을 표현할 수 있는 한마디를 작성해주세요.',
  appeal: ['어필 할 수 있는 파일을 올려주세요.', '파일'],
  content: '크루를 하고 싶은 분께 하고 싶은 말을 작성해주세요. ',
  keywords: ['저를 표현 할 수 있는 태그를 선택해 주세요.'],
} as const;

export const RECRUITMENT_COMPLETE: RecruitmentComplete = {
  deadline: '모집 기간',
  description: '프로젝트 한줄 소개',
  task_need: '필요한 크루의 업무',
  member_count: '필요한 크루의 인원',
  phone: '연락처',
  crew_questions: '궁금한 질문',
  content: '전하고 싶은 말',
  keywords: '이런 분과 함께 크루를 하고 싶어요!',
} as const;

export const CREW_KEYWORDS = [
  '센스',
  '능력갑',
  '친절',
  '시간이많아요',
  '배려',
  '열정적',
  '긍정적',
  '다재다능',
  '리더쉽',
  '효울적',
  '공과사구분',
  '같은연령대',
  '같은성별원해요',
  '정리를잘해요',
] as const;

export const defaulRecruitForm = {
  deadline: '',
  detailTags: [],
  description: '',
  taskNeed: '',
  memberCount: 0,
  phone: '',
  crewQuestions: [],
  content: '',
  keywords: [],
};

export const defaulApplicantForm = {
  name: '',
  major: '',
  doubleMajor: '',
  international: false,
  grade: 0,
  status: '',
  phone: '',
  aboutMe: '',
  content: '',
  keywords: [],
  crewAnswers: [],
};
