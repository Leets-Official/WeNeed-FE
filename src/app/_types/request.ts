interface RequestMainRecruitParams {
  size: number;
  page: number;
}

interface RequestMainPortfolioParams extends RequestMainRecruitParams {
  sort: string[];
}

interface MyPageMyInfoPatch {
  profileImage: string;
  request: {
    nickname: string;
    major: string;
    userGrade: number;
    doubleMajor: string;
    interestField: string;
    links: string[];
  };
  selfIntro: string;
}
