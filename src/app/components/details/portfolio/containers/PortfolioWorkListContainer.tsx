'use client';

import ProfileCol from '../ProfileCol';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import PortfolioItem from 'components/main/portfolio/PortfolioItem';
import Link from 'next/link';

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
      <div className="max-w-[1290px] w-full mt-[60px] mb-[60px]">
        <ProfileCol user={writer} />
        <div className="flex justify-between w-full ">
          <h3 className="w-[80%] text-3xl font-semibold mb-[43px] ">
            {writer.writerNickname}님의 작업 목록
          </h3>
          <div className="w-[10%] text-end cursor-pointer">
            <Link href={`/mypage/${writer.userId}`}>{'>'} 프로필 보러가기</Link>
          </div>
        </div>

        <div className="w-full h-[310px]">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={4.25}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 2000,
            }}
          >
            {workList.map((work) => {
              return (
                <SwiperSlide key={work.articleId}>
                  <Link href={`/portfolio/${work.articleId}`}>
                    <PortfolioItem article={work} onRecommend />
                  </Link>
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
