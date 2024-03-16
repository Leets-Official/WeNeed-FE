interface UseMypageURL {
  menu: string;
  slug: number;
  size: number;
}

const useMypageURL = ({ menu, slug, size }: UseMypageURL) => {
  switch (menu) {
    case 'MY OUTPUT':
      return `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myportfolio?userId=${slug}&size=6`;
    case 'MY CREW':
      return [
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myrecruitingcrews?size=${size}`,
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myappliedcrews?size=${size}`,
      ];
    case '관심 게시글':
      return `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/instportfolio?size=6`;
    case '관심 크루 찾기':
      return `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/instcrew?size=6`;
    default:
      return `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myportfolio?size=6`;
  }
};

export default useMypageURL;
