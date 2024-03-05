/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Slider from 'react-slick';
import HotPortfolioItem from '../HotPortfolioItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icons from 'components/common/Icons';
import { leftAngle, rightAngle } from 'ui/IconsPath';
import { MouseEventHandler } from 'react';

interface HotItemsContainerProps {
  data: HotArticle[];
  user: UserProfile;
  onClickItem: (
    userId: number,
    articleId: number,
  ) => MouseEventHandler<HTMLDivElement> | undefined;
}

const HotItemsContainer = ({
  data,
  user,
  onClickItem,
}: HotItemsContainerProps) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '30px',
    draggable: true,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 2200,
  };

  return (
    <Slider
      {...settings}
      className="relative flex justify-center items-center w-screen mt-10 "
    >
      {data.map((article) => (
        <div
          key={article.articleId}
          className="mx-[15px] text-center"
          onClick={() => onClickItem(user.userId, article.articleId)}
        >
          <HotPortfolioItem article={article} />
        </div>
      ))}
    </Slider>
  );
};

export default HotItemsContainer;

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[235px] left-[200px] flex justify-center items-center custom-next-arrow bg-[#3A3A3A] w-8 h-8 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <Icons name={leftAngle} />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-20 top-[235px] right-[200px]  flex justify-center items-center custom-next-arrow bg-[#3A3A3A] w-8 h-8 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <Icons name={rightAngle} />
    </div>
  );
};
