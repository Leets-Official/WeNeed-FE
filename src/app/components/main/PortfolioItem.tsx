import Image from 'next/image';
import Icons from 'components/common/Icons';
import { bookmark, view } from 'ui/IconsPath';
import GradientHeart from 'ui/gradient/GradientHeart';

const PortfolioItem = () => {
  return (
    <div className="relative cursor-pointer w-[285px]">
      <div className="absolute top-3 right-3 rounded-full">
        <Icons name={bookmark} />
      </div>
      <div className=" w-72 h-72 rounded-lg text-sm overflow-hidden ">
        <Image
          src="https://s3-alpha-sig.figma.com/img/28ce/52f0/dc426ce4c88eb876d640ed1adc5bfa66?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVKsHHvM~~U5jgPUdZ7V3O9QP3MfNXARGxscXiMEqSMoN1nDRdoElTnaKx73pGXx7AHYSPGyhBbR~D76V4XixnI~0kdjCEM5kFVr22A~rcIu-PhXYDK6JhpjTBsBE4MymjUGzPrk854WH2xTi4NqNidwAj5tM~npP3ULeBtOwXoMuddWeTXL6UFwsee-8xgBSPUV9uEQe8tzpgEuq8i3IsxO86TDNNg2pvsqNWRYJA7ar0JEdCUD2RI-SAJiVGCU3a49EPchgEp5SxowVjzQ46MSRyXiTizpkADKQeayrVdDVXo5KxUfUd5W291kCb5V0NvVjDwQfhEX1Dk8ZtP6pw__"
          width={288}
          height={288}
          alt="postImage"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="absolute"></div>

      <div className="flex justify-between w-full h-[35px] mt-[11px]">
        <div className="flex justify-center items-center gap-[10px]">
          <div className="w-8 h-8 bg-zinc-300 rounded-full"></div>
          <p className="font-semibold"> 본인 이름</p>
        </div>
        <div className="flex gap-[10px] justify-center items-center ">
          <Icons name={view} />
          <p>122</p>
          <GradientHeart />
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
