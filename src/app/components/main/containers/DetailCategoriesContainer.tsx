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
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    if (
      selectedCategoriesValue.length === 0 ||
      selectedCategoriesValue.length > 9
    ) {
      setSlidesPerView(9.75);
    } else {
      setSlidesPerView(Math.min(selectedCategoriesValue.length));
    }
  }, [selectedCategoriesValue]);

  useEffect(() => {
    const totalWidth = selectedCategoriesValue.length * 125;
    setContainerWidth(totalWidth);
  }, [selectedCategoriesValue]);

  const onSelectCategory = (category: string) => {
    setSelectedCategories((prev) => [...prev, category]);
  };

  return (
    <div className="w-full relative ">
      <div
        className="relative flex justify-start items-start w-auto h-9 rounded-3xl gap-[20px]"
        style={{
          width:
            selectedCategoriesValue.length > 9 ||
            selectedCategoriesValue.length === 0
              ? '100%'
              : containerWidth + 'px',
        }}
      >
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: '.swiper-button-next-category',
          }}
          centeredSlides={false}
          grabCursor={true}
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

        {(selectedCategoriesValue.length > 9 ||
          selectedCategoriesValue.length === 0) && (
          <>
            <div className="z-20 swiper-button-next-category flex justify-center items-center absolute right-1 top-1.5 w-6 h-6 pl-1 bg-zinc-300 rounded-full cursor-pointer">
              <Icons name={bigLeftAngle} />
            </div>
            <div className="z-10 absolute top-0 right-[-1%] w-32 h-9 bg-gradient-to-r from-transparent to-neutral-950 rounded-xl"></div>
          </>
        )}
      </div>
      {selectedCategoriesValue.length !== 0 && (
        <div
          className=" absolute top-2 right-[5%] font-normal text-sm border-b-1 border-[#FFFFFF] text-[#FFFFFF] cursor-pointer"
          onClick={() => setSelectedCategories([])}
        >
          초기화
        </div>
      )}
    </div>
  );
};

export default DetailCategoriesContainer;
