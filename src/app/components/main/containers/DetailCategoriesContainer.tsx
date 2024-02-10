'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { bigLeftAngle } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import { INTERESTED_TAG_LIST } from 'constants/portfolio';
import { selectedCategories } from 'recoil/main';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import DetailCategories from '../common/DetailCategories';

const DetailCategoriesContainer = () => {
  const [selectedCategoriesValue, setSelectedCategories] =
    useRecoilState(selectedCategories);
  const [slidesPerView, setSlidesPerView] = useState<number>(9.75);

  useEffect(() => {
    if (selectedCategoriesValue.length === 0) {
      setSlidesPerView(9.75);
    } else {
      setSlidesPerView(Math.min(selectedCategoriesValue.length, 9.75));
    }
  }, [selectedCategoriesValue]);

  return (
    <div className="w-full">
      <div className="relative flex w-full h-9 rounded-3xl ">
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          grabCursor={true}
          navigation={{
            nextEl: '.swiper-button-next-category',
          }}
          centeredSlides={false}
        >
          {selectedCategoriesValue.length === 0
            ? INTERESTED_TAG_LIST.map((category) => {
                return (
                  <SwiperSlide key={category}>
                    <DetailCategories category={category} />
                  </SwiperSlide>
                );
              })
            : selectedCategoriesValue.map((category) => {
                return (
                  <SwiperSlide key={category}>
                    <DetailCategories category={category} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
        <div className="z-20 swiper-button-next-category flex justify-center items-center absolute right-1 top-1.5 w-6 h-6 pl-1 bg-zinc-300 rounded-full cursor-pointer">
          <Icons name={bigLeftAngle} />
        </div>
        <div className="z-10 absolute top-0 right-[-1%] w-32 h-9 bg-gradient-to-r from-transparent to-neutral-950 rounded-xl"></div>
      </div>
    </div>
  );
};

export default DetailCategoriesContainer;
