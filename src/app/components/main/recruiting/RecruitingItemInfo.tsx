import Icons from 'components/common/Icons';
import {
  bookmarkGray,
  commentGray,
  crewPlusGray,
  heartGray,
  shareGray,
} from 'ui/IconsPath';

interface RecruitingItemInfoProps {
  article: RecruitListItem;
}

const RecruitingItemInfo = ({ article }: RecruitingItemInfoProps) => {
  const { viewCount, heartCount, bookmarkCount, commentCount } = article;
  return (
    <div className="w-full flex justify-between border-t border-black h-[86px] items-center text-[#3A3A3A] font-bold text-[18px]">
      <div className="flex w-[16%] justify-center items-center gap-2">
        {tempProfileIcon()} 조회수 {viewCount}
      </div>
      <div
        className="flex w-[16%] justify-center items-center gap-2 fill-black"
        onClick={() => alert('서비스 준비중입니다 헤헤')}
      >
        <Icons name={crewPlusGray} /> 크루제안
      </div>
      <div className="flex w-[16%] justify-center items-center gap-2 fill-black">
        <Icons name={heartGray} /> 좋아요 {heartCount}
      </div>
      <div className="flex w-[16%] justify-center items-center gap-2 fill-black">
        <Icons name={bookmarkGray} /> 북마크 {bookmarkCount}
      </div>
      <div className="flex w-[16%] justify-center items-center gap-2 fill-black">
        <Icons name={commentGray} /> 댓글 {commentCount}
      </div>
      <div className="flex w-[16%] justify-center items-center gap-2 fill-black">
        <Icons
          name={shareGray}
          onClick={() => alert('서비스 준비중입니다 헤헤')}
        />
        공유하기
      </div>
    </div>
  );
};

export default RecruitingItemInfo;

const tempProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.364 8.72692C16.364 9.88423 15.9043 10.9941 15.0859 11.8125C14.2676 12.6308 13.1577 13.0906 12.0004 13.0906C10.843 13.0906 9.73314 12.6308 8.9148 11.8125C8.09646 10.9941 7.63672 9.88423 7.63672 8.72692C7.63672 7.56961 8.09646 6.4597 8.9148 5.64136C9.73314 4.82302 10.843 4.36328 12.0004 4.36328C13.1577 4.36328 14.2676 4.82302 15.0859 5.64136C15.9043 6.4597 16.364 7.56961 16.364 8.72692ZM14.1822 8.72692C14.1822 9.30557 13.9523 9.86053 13.5431 10.2697C13.134 10.6789 12.579 10.9087 12.0004 10.9087C11.4217 10.9087 10.8667 10.6789 10.4576 10.2697C10.0484 9.86053 9.81854 9.30557 9.81854 8.72692C9.81854 8.14826 10.0484 7.59331 10.4576 7.18414C10.8667 6.77497 11.4217 6.5451 12.0004 6.5451C12.579 6.5451 13.134 6.77497 13.5431 7.18414C13.9523 7.59331 14.1822 8.14826 14.1822 8.72692Z"
      fill="#3A3A3A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37273 0 0 5.37273 0 12C0 18.6273 5.37273 24 12 24C18.6273 24 24 18.6273 24 12C24 5.37273 18.6273 0 12 0ZM2.18182 12C2.18182 14.28 2.95964 16.3789 4.26327 18.0458C5.1788 16.8435 6.35989 15.8692 7.71429 15.1989C9.06869 14.5286 10.5597 14.1805 12.0709 14.1818C13.5625 14.1804 15.0348 14.5195 16.3756 15.1732C17.7163 15.827 18.8901 16.7781 19.8076 17.9542C20.7529 16.7145 21.3893 15.2675 21.6642 13.733C21.9392 12.1985 21.8448 10.6206 21.3889 9.1298C20.933 7.63902 20.1286 6.27823 19.0423 5.16004C17.9561 4.04185 16.6192 3.19839 15.1422 2.69946C13.6653 2.20054 12.0908 2.06048 10.5489 2.29088C9.00711 2.52128 7.54232 3.11552 6.27575 4.02442C5.00918 4.93333 3.97725 6.13077 3.26534 7.51767C2.55343 8.90457 2.18202 10.4411 2.18182 12ZM12 21.8182C9.74613 21.8216 7.56029 21.0462 5.81236 19.6233C6.51592 18.6161 7.45237 17.7937 8.54203 17.2262C9.63169 16.6587 10.8423 16.3628 12.0709 16.3636C13.2842 16.3627 14.4802 16.6512 15.5596 17.2052C16.6389 17.7592 17.5706 18.5628 18.2771 19.5491C16.5156 21.0182 14.2937 21.8214 12 21.8182Z"
      fill="#3A3A3A"
    />
  </svg>
);
