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
