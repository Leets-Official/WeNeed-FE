'use client';
import { portThumbnail } from 'ui/upload/bothUI';
import AddThumbnail from '../../both/AddThumbnail';
import SelectFile from '../SelectFileP';
import DndContainer from 'components/upload/dnd/DndContainer';
import SideNav from 'components/upload/both/SideNav';
import { navItemIconPath_P } from 'ui/IconsPath';
import { SIDENAV_ITEM_NAME } from 'constants/portfolio';
import FirstSelectP from '../FirstSelectP';
import { filestate, textState } from 'recoil/upload';
import { useRecoilState } from 'recoil';

const UploadContainerP = () => {
  const [items, setItems] = useRecoilState(textState);
  const [files, setFiles] = useRecoilState(filestate);

  return (
    <div className="relative flex flex-col w-[100%] h-auto bg-white mt-[22px] gap-y-2.5">
      <AddThumbnail thumbnailInfo={portThumbnail} />
      <div>
        {items.length > 0 || files.length > 0 ? (
          <div className="items-center w-full h-[740px] overflow-y-auto px-9 pt-[36.15px]">
            <DndContainer articleType={'portfolio'} />
          </div>
        ) : (
          <FirstSelectP />
        )}
        <SideNav
          navItemIconPath={navItemIconPath_P}
          iconNameArr={SIDENAV_ITEM_NAME}
          articleType={'portfolio'}
        />
      </div>
      <div className="flex justify-center pb-[46px]">
        {(items.length > 0 || files.length > 0) && <SelectFile />}
      </div>
    </div>
  );
};

export default UploadContainerP;
