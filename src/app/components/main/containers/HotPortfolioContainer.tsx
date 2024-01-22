'use client';

import HotPortfolioItem from '../portfolio/HotPortfolioItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Icons from 'components/common/Icons';
import { bigLeftAngle, bigRightAngle } from 'ui/IconsPath';

const HotPortfolioContainer = () => {
  return (
    <div className="relative mt-[60px] w-[97vw] flex flex-col justify-center items-center">
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          breakpoints={{
            1024: { slidesPerView: 1.125 },
            1280: { slidesPerView: 1.5 },
            1920: { slidesPerView: 2.25 },
          }}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          navigation={{
            prevEl: '.swiper-button-prev-hot',
            nextEl: '.swiper-button-next-hot',
          }}
        >
          <SwiperSlide>
            <HotPortfolioItem />
          </SwiperSlide>
          <SwiperSlide>
            <HotPortfolioItem />
          </SwiperSlide>
          <SwiperSlide>
            <HotPortfolioItem />
          </SwiperSlide>
          <SwiperSlide>
            <HotPortfolioItem />
          </SwiperSlide>
          <SwiperSlide>
            <HotPortfolioItem />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev-hot absolute left-[18%] z-20 top-1/2 transform -translate-y-1/2 bg-black rounded-full">
          <Icons name={bigLeftAngle} />
        </div>
        <div className="swiper-button-next-hot absolute right-[18%] x-20 top-1/2 transform -translate-y-1/2">
          <Icons name={bigRightAngle} />
        </div>
      </div>
    </div>
  );
};

export default HotPortfolioContainer;
