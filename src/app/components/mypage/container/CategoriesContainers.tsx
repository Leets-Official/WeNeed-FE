/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Categories from '../posts/Categories';
import { useRecoilState } from 'recoil';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MY_PAGE } from 'constants/mypage';
import { selectedCategoriesState } from 'recoil/mypage';
import Slider from 'react-slick';
import Icons from 'components/common/Icons';
import { bigLeftAngle } from 'ui/IconsPath';

const CategoriesContainers = () => {
  const [selectedCategories, setSelectedCategories] = useRecoilState(
    selectedCategoriesState,
  );

  const CategoriesList: ReadonlyArray<string> = [
    '전체',
    ...MY_PAGE.INTERESTED_TAG_LIST,
  ] as const;

  const handleCategoryClick = (category: string) => {
    if (category === '전체') {
      setSelectedCategories(['전체']);
    } else {
      setSelectedCategories((prev) => {
        if (prev.includes(category)) {
          const newArr = prev.filter((item) => item !== category);
          return newArr;
        } else {
          if (prev.length > 0 && prev[0] === '전체') {
            return ['전체', category, ...prev.slice(1)];
          } else {
            return ['전체', category, ...prev];
          }
        }
      });
    }
  };

  const handleResetSelection = () => {
    setSelectedCategories(['전체']);
  };

  const settings = {
    infinite: false,
    slidesToScroll: 3,
    variableWidth: true,
    centerPadding: '20px',
    nextArrow: <NextArrow />,
    prevArrow: <></>,
  };

  return (
    <div className="w-full pl-2 relative">
      <div
        className="w-[80%] flex justify-end my-3 text-black text-[10px] font-light underline cursor-pointer"
        onClick={handleResetSelection}
      >
        {MY_PAGE.TAG_RESET}
      </div>
      <div className="w-[80%]">
        <Slider
          {...settings}
          className={`relative flex justify-center items-center ${
            selectedCategories.length > 9 ? 'w-[90%]' : 'w-full'
          } h-full`}
        >
          {selectedCategories.map((category, index) => (
            <div key={index}>
              <Categories
                category={category}
                selectedCategories={selectedCategories}
                handleCategoryClick={handleCategoryClick}
              />
            </div>
          ))}
          {CategoriesList.filter(
            (category) => !selectedCategories.includes(category),
          ).map((category, index) => (
            <div key={index}>
              <Categories
                category={category}
                selectedCategories={selectedCategories}
                handleCategoryClick={handleCategoryClick}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoriesContainers;

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="flex items-center justify-center">
      <div
        className="z-30 flex justify-center items-center absolute right-1 top-1.5 w-6 h-6 pl-1 bg-zinc-300 rounded-full cursor-pointer"
        onClick={onClick}
      >
        <Icons name={bigLeftAngle} />
      </div>
    </div>
  );
};
