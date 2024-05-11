interface UseMypageURL {
  menu: string;
  slug: number;
  size: number;
}

const useMypageURL = ({ menu, slug, size }: UseMypageURL) => {
  const BASE = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/`;
  switch (menu) {
    case 'MY CREW':
      return [
        `${BASE}myrecruitingcrews?size=${size}`,
        `${BASE}myappliedcrews?size=${size}`,
      ];
    case '관심 게시글':
      return `${BASE}instportfolio?size=6`;
    case '관심 크루 찾기':
      return `${BASE}instcrew?size=6`;
    default:
      return `${BASE}myportfolio?userId=${slug}&size=6`;
  }
};

export default useMypageURL;
