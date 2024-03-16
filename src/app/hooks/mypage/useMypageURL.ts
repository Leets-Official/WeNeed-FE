interface UseMypageURL {
  menu: string;
}

const useMypageURL = ({ menu }: UseMypageURL) => {
  switch (menu) {
    case 'MY OUTPUT':
      return '/myportfolio';
    case 'MY CREW':
      return '/mycrew';
    case '관심 게시글':
      return '/instportfolio';
    case '관심 크루 찾기':
      return '/instcrew';
    default:
      return '/myportfolio';
  }
};

export default useMypageURL;
