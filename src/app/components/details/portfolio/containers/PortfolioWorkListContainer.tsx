'use client';

import ProfileCol from '../ProfileCol';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import PortfolioItem from 'components/main/portfolio/PortfolioItem';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PortfolioWorkListContainerProps {
  writer: WriterProfile;
  workList: OtherWorkList[];
}

const PortfolioWorkListContainer = ({
  writer,
  workList,
}: PortfolioWorkListContainerProps) => {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1200,
    prevArrow: <></>,
  };

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
          <Slider {...settings} className="w-full h-[310px] mt-[38px]">
            {workList?.map((work) => (
              <Link key={work.articleId} href={`/portfolio/${work.articleId}`}>
                <div className="mr-[32px]">
                  <PortfolioItem article={work} onRecommend />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWorkListContainer;
