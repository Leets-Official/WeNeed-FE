'use client';
import { recruitThumbnail } from 'ui/upload/bothUI';
import AddThumbnail from '../../both/AddThumbnail';
import SelectFileR from '../SelectFileR';
import BigSentence from '../BigSentence';
import { textState } from 'recoil/upload';
import { useRecoilState } from 'recoil';
import SideNav from 'components/upload/both/SideNav';
import FirstSelectR from '../FirstSelectR';
import DndContainer from 'components/upload/dnd/DndContainer';
import { navItemIconPath_R } from 'ui/IconsPath';
import { SIDENAV_ITEM_NAME_R } from 'constants/recruit';

const UploadContainerR = () => {
  const [items, setItems] = useRecoilState(textState);

  return (
    <div className="bg-black">
      <div className="flex flex-col w-[1280px] mt-[22px] h-auto bg-white gap-y-2.5">
        <AddThumbnail thumbnailInfo={recruitThumbnail} />
        <div className="relative">
          {items.length > 0 ? (
            <div className="items-center w-full h-[645px] overflow-auto px-[37px] pt-[24.15px]">
              <DndContainer articleType={'recruit'} />
            </div>
          ) : (
            <FirstSelectR />
          )}
          <SideNav
            navItemIconPath={navItemIconPath_R}
            iconNameArr={SIDENAV_ITEM_NAME_R}
            articleType={'recruit'}
          />
        </div>
        <div className="flex justify-center pb-[46px]">
          {items.length > 0 && <SelectFileR />}
        </div>
        {/* <BigSentence /> */}
      </div>
    </div>
  );
};

export default UploadContainerR;
