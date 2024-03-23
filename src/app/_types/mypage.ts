interface FeedItems {
  articleId: number;
  thumbnail: string;
  title: string;
  viewCount: number;
  heartCount: number;
  teamProfiles: Array<string>;
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
}

interface MypageUserInfo {
  profile: string;
  nickname: string;
  major: string;
  userGrade: number;
  doubleMajor: string;
  interestFiled: string;
  email: string;
  lnks: string[];
  selfIntro: string;
}
