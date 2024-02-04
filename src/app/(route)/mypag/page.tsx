'use client';

import DropDown from 'components/mypage/profile/DropDown';
import InfoBox from 'components/mypage/profile/InfoBox';
import { MY_PAGE } from 'constants/mypage';
import { useRecoilState } from 'recoil';
import { dropdownItemsState } from 'recoil/dropdown';
import { useState } from 'react';

export default function MyPage() {
  const [dropdownItem, setDropdownItem] = useRecoilState(dropdownItemsState);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ItemList = [...MY_PAGE.DEPARTMENT_LIST].sort();

  const handleItemSelect = (item: string) => {
    setIsOpen(false);
    setDropdownItem((prev) => ({ ...prev, item }));
  };

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section>
      <div className="w-[705px] h-[1241px] bg-neutral-900">
        <InfoBox title={'이름'} content={'김민수'} />
      </div>
      <DropDown
        sortedItemList={ItemList}
        selectedItem={dropdownItem.major}
        onItemSelect={handleItemSelect}
        onOpen={handleIsOpen}
        isOpen={false}
      />
      MyPage
    </section>
  );
}
