'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SwiperSlide } from 'swiper/react';
import { bigLeftAngle } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import { INTERESTED_TAG_LIST } from 'constants/portfolio';
import { selectedCategories } from 'recoil/main';
import { useRecoilState } from 'recoil';
import DetailCategories from '../common/DetailCategories';

const DetailCategoriesContainer = () => {
  const [selectedCategoriesValue, setSelectedCategories] =
    useRecoilState(selectedCategories);

  const settings = {
    initialSlides: 9,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    centerPadding: '20px',
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full relative">
      <Slider
        {...settings}
        className="relative flex justify-center items-center w-full"
      >
        {selectedCategoriesValue.length === 0
          ? INTERESTED_TAG_LIST.map((category) => (
              <SwiperSlide key={category}>
                <DetailCategories category={category} />
              </SwiperSlide>
            ))
          : selectedCategoriesValue.map((category) => (
              <SwiperSlide key={category}>
                <DetailCategories category={category} />
              </SwiperSlide>
            ))}
      </Slider>
      <div className="z-10 absolute top-1 right-[-1%] w-32 h-9 bg-gradient-to-r from-transparent to-blue-950 rounded-xl"></div>
    </div>
  );
};

export default DetailCategoriesContainer;

const CustomNextArrow = () => (
  <div className="z-20 swiper-button-next-category flex justify-center items-center absolute right-1 top-1.5 w-6 h-6 pl-1 bg-zinc-300 rounded-full cursor-pointer">
    <Icons name={bigLeftAngle} />
  </div>
);
