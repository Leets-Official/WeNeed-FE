/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LOGGEDIN_SECTION_HEADINGS } from 'constants/main';
import Link from 'next/link';
import PortfolioItem from '../portfolio/PortfolioItem';
import { MouseEventHandler } from 'react';

interface RecommendContainerProps {
  data: RecommendArticle[];
  user: UserProfile;
  onClickItem: (
    userId: number,
    articleId: number,
  ) => MouseEventHandler<HTMLDivElement> | undefined;
}

const RecommendContainer = ({
  data,
  user,
  onClickItem,
}: RecommendContainerProps) => {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: '20px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1200,
    prevArrow: <></>,
  };

  return (
    <div className="relative flex flex-col items-center w-[98vw] h-[525px] scrollbar-hide mt-[68px] bg-neutral-700 pt-[50px] pb-[60px]">
      <div className="flex flex-col gap-[20px] w-[1280px]">
        <h1 className="text-3xl font-bold">
          {LOGGEDIN_SECTION_HEADINGS.recommend}
        </h1>
        <h3 className="text-lg font-bold">
          {LOGGEDIN_SECTION_HEADINGS.recommend_sub}
        </h3>
      </div>
      <Slider {...settings} className="w-full h-[310px] mt-[38px]">
        {data?.map((article) => (
          <div className="mx-[32px]" key={article.articleId}>
            <div onClick={() => onClickItem(user.userId, article.articleId)}>
              <PortfolioItem article={article} onRecommend />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendContainer;
