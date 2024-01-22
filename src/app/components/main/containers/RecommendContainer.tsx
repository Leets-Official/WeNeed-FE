'use client';

import { LOGGEDIN_SECTION_HEADINGS } from 'constants/main';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import PortfolioItem from '../PortfolioItem';

interface RecommendContainerProps {
  data: RecommendArticle[];
}

const RecommendContainer = ({ data }: RecommendContainerProps) => {
  return (
    <div className="relative flex flex-col items-center w-[98vw] h-[525px] scrollbar-hide  mt-[65px] bg-neutral-700 pt-[50px] pb-[60px]">
      <div className="flex flex-col gap-[20px] w-[1280px]">
        <h1 className="text-3xl font-bold">
          {LOGGEDIN_SECTION_HEADINGS.recommend}
        </h1>
        <h3 className="text-lg font-bold">
          {LOGGEDIN_SECTION_HEADINGS.recommend_sub}
        </h3>
      </div>
      <div className="w-full h-[310px] mt-[38px]">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            1280: { slidesPerView: 5.5 },
            1024: { slidesPerView: 4 },
            1920: { slidesPerView: 7 },
          }}
          slidesPerView="auto"
          grabCursor={true}
          autoplay={{
            delay: 1500,
          }}
        >
          {data.map((article) => (
            <SwiperSlide key={article.articleId}>
              <PortfolioItem article={article} onRecommend />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendContainer;