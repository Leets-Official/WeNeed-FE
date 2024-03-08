'use client';

import DropDown from 'components/mypage/profile/DropDown';
import { crewCategoriesState, crewMembersState } from 'recoil/dropdown';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { RECRUITING_DROPDOWN } from 'constants/recruit';

export default function RecruitPage() {
  const [crewCategories, setCrewCategoires] =
    useRecoilState(crewCategoriesState);
  const [crewMembers, setCrewMembers] = useRecoilState(crewMembersState);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [isMembersOpen, setIsMembersOpen] = useState<boolean>(false);

  const handleItemSelect = (type: string) => (item: string) => {
    handleIsOpen(type);
    type === 'member'
      ? setCrewMembers(() => parseInt(item[0]))
      : setCrewCategoires(() => item);
    console.log(crewCategories);
    console.log(crewMembers);
  };

  const handleIsOpen = (type: string) => {
    switch (type) {
      case 'member':
        setIsMembersOpen((prev) => !prev);
        setIsCategoriesOpen(false);
        break;
      case 'categories':
        setIsMembersOpen(false);
        setIsCategoriesOpen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <DropDown
        sortedItemList={[...RECRUITING_DROPDOWN.INTERSETED_FIELD]}
        selectedItem={
          crewCategories.length === 0
            ? RECRUITING_DROPDOWN.CATEGORIES
            : crewCategories
        }
        onItemSelect={handleItemSelect('categories')}
        onOpen={() => handleIsOpen('categories')}
        isOpen={isCategoriesOpen}
        className={`absolute left-5 top-2 w-[291px] max-h-[310px]`}
        buttonClassName={`relative bg-white w-[291px] h-[50px] rounded-[10px] border border-black text-neutral-500 text-sm font-normal text-left flex justify-between items-center px-4 `}
        dropDownClassName={`z-40 relative bg-white w-[291px] max-h-[240px] rounded-[15px] border border-black overflow-y-scroll scrollbar-hide`}
        itemClassName={`w-[291px] h-[40px] py-2 text-left px-4 text-xs font-normal hover:text-black`}
      />
      <DropDown
        sortedItemList={[...RECRUITING_DROPDOWN.CREW_MEMBER]}
        selectedItem={
          crewMembers === 0 ? RECRUITING_DROPDOWN.MEMBERS : `${crewMembers}명`
        }
        onItemSelect={handleItemSelect('member')}
        onOpen={() => handleIsOpen('member')}
        isOpen={isMembersOpen}
        className={`absolute left-5 top-20 w-[291px] max-h-[310px]`}
        buttonClassName={`relative w-[291px] h-[50px] rounded-[10px] border border-black text-neutral-500 text-sm font-normal text-left flex justify-between items-center px-4 `}
        dropDownClassName={`z-40 relative w-[291px] max-h-[240px] rounded-[15px] border border-black overflow-y-scroll scrollbar-hide`}
        itemClassName={`w-[291px] h-[40px] py-2 text-left px-4 text-xs font-normal hover:text-black`}
      />
    </section>
  );
}
