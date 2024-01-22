'use client';

import ProfileCol from '../ProfileCol';
import PortfolioItem from 'components/main/PortfolioItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface PortfolioWorkListContainerProps {
  writer: WriterProfile;
  workList: OtherWorkList[];
}

const PortfolioWorkListContainer = ({
  writer,
  workList,
}: PortfolioWorkListContainerProps) => {
  return (
    <div className="flex justify-center items-center w-full bg-black text-white">
      <div className="w-[1290px] mt-[60px] mb-[60px]">
        <ProfileCol user={writer} />
        <div className="flex justify-between w-full">
          <h3 className="w-[80%] text-3xl font-semibold mb-[43px] ">
            {writer.nickname}님의 작업 목록
          </h3>
          <p className="w-[10%] text-end cursor-pointer">
            {'>'} 프로필 보러가기
          </p>
        </div>
        <div className="w-full h-[310px]">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 2000,
            }}
          >
            {workList.map((work) => {
              return (
                <SwiperSlide key={work.articleId}>
                  <PortfolioItem onRecommend />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWorkListContainer;
