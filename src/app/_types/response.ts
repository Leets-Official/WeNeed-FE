interface ResponseRecruitingMain {
  user: UserProfile;
  pageable: Pageable;
  recruitList: RecruitListItem[];
}

interface ResponsePortfolioMain {
  user: UserProfile;
  pageable: Pageable;
  hotArticleList: HotArticle[];
  articleList: PortfolioArticle[];
  recommendArticleList: RecommendArticle[];
}

interface ResponsePortfolioDetails {
  user: UserProfile;
  portfolio: PortfolioDetails;
  workList: OtherWorkList[];
  comments: CommentList[];
}

interface ResponseRecruitingDetail {
  user: UserProfile;
  recruit: RecruitDetailItem;
  comments: CommentList[];
}

interface ResponseGoogleLogin {
  accessToken: string;
  refreshToken: string;
  hasRegistered: boolean;
}

interface ResponseSearch {
  user: UserProfile;
  pageable: Pageable;
  articleList: SearchArticle[];
}

interface ResponseUploadSearch {
  users: UserInfo[];
}

interface ResponseCrewRecruiter {
  recruitUser: WriterProfile;
  article: RecruitFormArticle;
  recruitForm: RecruitFormFromServer;
  loggedInUser: WriterProfile;
  sameUser: boolean;
}

interface ResponseCrewApplicant {
  user: WriterProfile;
  applicationForm: ApplicationFormResponse;
  sameUser: boolean;
  nickname: string;
}

interface ResponseMypageBasicInfo {
  userNickname: string;
  sameUser: boolean;
  userInfo: MypageUserInfo;
  myOutputList: MyOutputList[];
  pageableDto: Pageable;
}

interface ResponseMypageMycrew {
  recruitData: ResponseMypageOtherInfo;
  appliedData: ResponseMyApplicationCrew;
}

interface ResponseMyApplicationCrew {
  applicationInfoResponses: MyOutputList[];
  pageableDto: Pageable;
}

interface ResponseMypageOtherInfo {
  myOutputList: MyOutputList[];
  pageableDto: Pageable;
}
