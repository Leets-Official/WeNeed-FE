interface FeedItems {
  articleId: number;
  thumbnail: string;
  title: string;
  viewCount: number;
  heartCount: number;
  teamProfiles: Array<string>;
  recruitId: number;
}

interface FeedItems2 {
  applicationId: number;
  thumbnail: string;
  title: string;
  viewCount: number;
  heartCount: number;
  teamProfiles: Array<string>;
}

interface MyOutputList {
  articleId: number;
  thumbnail: string;
  title: string;
  viewCount: number;
  heartCount: number;
  teamProfiles: Array<string>;
  recruitId: number;
}

interface MyOutputRecruitList {
  articleId: number;
  thumbnail: string;
  title: string;
  viewCount: number;
  heartCount: number;
  teamProfiles: Array<string>;
  recruitId: number;
}

interface MypageUserInfo {
  profile: string;
  nickname: string;
  major: string;
  userGrade: number;
  doubleMajor: string;
  interestField: string;
  email: string;
  links: string[];
  selfIntro: string;
}

interface MypageMyinfo {
  profileImage: Blob;
  request: {
    nickname: string;
    major: string;
    userGrade: number;
    doubleMajor: string;
    interestField: string;
    email: string;
    links: string[];
    selfIntro: string;
  };
}
