'use client';

import { INTERESTED_FIELD_WITH_TAGS } from 'constants/portfolio';
import { useRecoilState } from 'recoil';
import { selectedCategories } from 'recoil/main';

interface CategoriesBoxProps {
  field: string;
}

const CategoriesBox = ({ field }: CategoriesBoxProps) => {
  const [selectedCategoriesValue, setSelectedCategories] =
    useRecoilState(selectedCategories);

  const onClickCategories = (category: string) => {
    if (selectedCategoriesValue.includes(category)) {
      setSelectedCategories((prev) =>
        prev.filter((selected) => selected !== category),
      );
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  return (
    <div>
      <h3 className="text-neutral-400 text-sm mb-[16px]">{field}</h3>
      {INTERESTED_FIELD_WITH_TAGS[field].map((category: string) => {
        let gradient = false;

        if (selectedCategoriesValue.includes(category)) {
          gradient = true;
        }
        return (
          <p
            key={category}
            className={`font-semibold mb-[10px] cursor-pointer ${
              gradient && 'text-cyan-400'
            }`}
            onClick={() => onClickCategories(category)}
          >
            {category}
          </p>
        );
      })}
    </div>
  );
};

export default CategoriesBox;
