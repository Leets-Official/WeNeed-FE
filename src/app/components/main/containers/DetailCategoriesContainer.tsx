import { SECTION_HEADINGS } from 'constants/main';
import DetailCategories from '../DetailCategories';

const exampleCategories = [
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
  '그래픽',
];

const DetailCategoriesContainer = () => {
  return (
    <div>
      <h1 className="mt-[65px] mb-[48px] w-full text-3xl font-semibold">
        {SECTION_HEADINGS.hot}
      </h1>
      <div className="flex gap-[14px] overflow-hidden">
        {exampleCategories.map((category) => {
          return <DetailCategories key={category} category={category} />;
        })}
      </div>
    </div>
  );
};

export default DetailCategoriesContainer;
