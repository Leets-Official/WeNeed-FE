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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UploadContainerRProps {
  isEdit: boolean;
  id: string;
}

const UploadContainerR = ({ id, isEdit }: UploadContainerRProps) => {
  const [items, setItems] = useRecoilState(textState);

  return (
    <div className="bg-black mt-5 mb-8">
      <AddThumbnail thumbnailInfo={recruitThumbnail} />
      <ToastContainer />
      <div className="relative flex flex-col w-[100%] h-auto mt-2  bg-white">
        <div className="relative">
          {items.length > 0 ? (
            <div className="items-center w-full h-[559px] overflow-auto px-[37px] pt-[24.15px]">
              <DndContainer articleType={'recruit'} />
            </div>
          ) : (
            <FirstSelectR />
          )}
          <SideNav
            navItemIconPath={navItemIconPath_R}
            iconNameArr={SIDENAV_ITEM_NAME_R}
            articleType={'recruit'}
            isEdit={isEdit}
            id={id}
          />
        </div>
        <div className="flex justify-center pb-[40px] pt-3">
          {items.length > 0 && <SelectFileR />}
        </div>
      </div>
      <BigSentence isEdit={isEdit} />
    </div>
  );
};

export default UploadContainerR;
