'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { bigLeftAngle } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import { INTERESTED_TAG_LIST } from 'constants/portfolio';
import { selectedCategories } from 'recoil/main';
import { useRecoilState } from 'recoil';
import DetailCategories from '../common/DetailCategories';

interface DetailCategoriesContainerProps {
  selected?: boolean;
  onCrew?: boolean;
  onSelectKeyword?: (name: string, keyword: string) => void;
}

const DetailCategoriesContainer = ({
  onCrew,
  onSelectKeyword,
}: DetailCategoriesContainerProps) => {
  const [selectedCategoriesValue, setSelectedCategories] =
    useRecoilState(selectedCategories);

  const onRemoveAllCategories = () => {
    setSelectedCategories([]);
  };

  const settings = {
    infinite: false,
    slidesToScroll: 3,
    variableWidth: true,
    centerPadding: '20px',
    nextArrow: (
      <CustomNextArrow
        onCrew={onCrew}
        selectedCategoriesValue={selectedCategoriesValue}
        onRemoveAllCategories={onRemoveAllCategories}
      />
    ),
    prevArrow: <></>,
  };

  return (
    <div className="w-full h-[35px] relative">
      <Slider
        {...settings}
        className={`relative flex justify-center items-center ${
          selectedCategoriesValue.length > 9 ? 'w-[90%]' : 'w-full'
        }  h-full`}
      >
        {selectedCategoriesValue.length === 0
          ? INTERESTED_TAG_LIST.map((category) => (
              <div
                key={category}
                onClick={() =>
                  onSelectKeyword && onSelectKeyword('detailTags', category)
                }
                className="flex "
              >
                <DetailCategories key={category} category={category} selected />
              </div>
            ))
          : selectedCategoriesValue.map((category) => (
              <DetailCategories key={category} category={category} selected />
            ))}
      </Slider>
    </div>
  );
};

export default DetailCategoriesContainer;

const CustomNextArrow = (props: any) => {
  const { onClick, onCrew, selectedCategoriesValue, onRemoveAllCategories } =
    props;
  return (
    <div className="flex items-center justify-center ">
      {(selectedCategoriesValue.length === 0 ||
        selectedCategoriesValue.length > 10) && (
        <>
          {!onCrew && (
            <div className="z-10 absolute top-0 right-[-1%] w-40 h-9 bg-gradient-to-r from-transparent to-neutral-950 rounded-xl"></div>
          )}
          <div
            className="z-30 flex justify-center items-center absolute right-1 top-1.5 w-6 h-6 pl-1 bg-zinc-300 rounded-full cursor-pointer"
            onClick={onClick}
          >
            <Icons name={bigLeftAngle} />
          </div>
        </>
      )}
      {selectedCategoriesValue.length > 0 && (
        <div
          className={`flex justify-center items-center h-full z-20 absolute top-0  text-white text-sm font-normal cursor-pointer ${
            selectedCategoriesValue.length > 9 ? 'right-[-5%]' : 'right-5'
          } `}
          onClick={onRemoveAllCategories}
        >
          초기화
        </div>
      )}
    </div>
  );
};
