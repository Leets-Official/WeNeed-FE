'use client';

import PortfolioItem from '../portfolio/PortfolioItem';
import Slider, { Settings } from 'react-slick';
import { MouseEventHandler } from 'react';
import { LOGGEDIN_SECTION_HEADINGS } from 'constants/main';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings: Settings = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: '30px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2200,
    prevArrow: <></>,
  };

  if (data) {
    return (
      <div className="relative flex flex-col items-center w-screen min-w-[1280px] h-[525px] scrollbar-hide mt-[68px] bg-neutral-700 pt-[50px] pb-[60px] ">
        <div className="flex flex-col gap-[20px] w-[1280px]">
          <h1 className="text-3xl font-bold">
            {LOGGEDIN_SECTION_HEADINGS.recommend}
          </h1>
          <h3 className="text-lg font-bold">
            {LOGGEDIN_SECTION_HEADINGS.recommend_sub}
          </h3>
        </div>
        <Slider {...settings} className="w-full h-[310px] mt-[38px]">
          {data.map((article) => (
            <div className="mx-[32px]" key={article.articleId}>
              <div onClick={() => onClickItem(user.userId, article.articleId)}>
                <PortfolioItem article={article} onRecommend />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
};

export default RecommendContainer;
