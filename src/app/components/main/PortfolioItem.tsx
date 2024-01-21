import Image from 'next/image';
import Icons from 'components/common/Icons';
import { bookmark, view } from 'ui/IconsPath';
import GradientHeart from 'ui/gradient/GradientHeart';

interface PortfolioItemsProps {
  onRecommend?: boolean;
}

const PortfolioItem = ({ onRecommend }: PortfolioItemsProps) => {
  return (
    <div className="relative cursor-pointer w-[285px]">
      <div className="absolute top-3 right-3">
        <Icons name={bookmark} />
      </div>
      <div className="flex justify-center items-center w-72 h-72 rounded-lg text-sm overflow-hidden ">
        <Image
          src="https://s3-alpha-sig.figma.com/img/d489/d794/6732799958bc759af733d7aa6c984f5b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LVQzXhTJIQ~TSDtQHStc7X763YOP~R6-XeEPLLS8OpWm~n4G~Qhh2nPgZxwoBBX1Md5KB7x85H0zse6Kz6~4YKxUY1tw0t1~Q6Ku3Grv6VdfSdIH-2lWSw9v9Dz26r~MTiQKxqb9E3YVLTAFMtlvnBGHzTKDftprktUOi1QBcnJsoJM2KF5CXMCm0n3pLafgM80ZF3hxik9SO4wfIuxI2GihnZuJqLt7k-f2AA2t55C0dgSO1MyqkpmuC56XlVa-biuEfb5CuUJXY~XkXXliC~Ygq7BHw1tgV6FQSDKiO2iUCtdT1yAeYSJNs6FA9-EpSL9jbHpUiHlQulzl7Qjw5A__"
          width={288}
          height={288}
          alt="postImage"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      {onRecommend ? (
        <>
          <p className="absolute z-10 w-[220px] top-[20px] left-[20px] truncate font-semibold">
            제목
          </p>
          <div className="absolute top-0 h-20 w-full bg-gradient-to-t from-transparent to-neutral-950 rounded-2xl"></div>
        </>
      ) : (
        <div className="flex justify-between w-full h-[35px] mt-[11px]">
          <div className="flex justify-center items-center gap-[10px]">
            <div className="w-8 h-8 bg-zinc-300 rounded-full"></div>
            <p className="font-semibold"> 본인 이름</p>
          </div>
          <div className="flex gap-[10px] justify-center items-center ">
            <Icons name={view} />
            <p>122</p>
            <GradientHeart width={16} height={17} />
            <p>12</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
