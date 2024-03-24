'use client';
import Button from 'components/common/Button';
import Icons from 'components/common/Icons';
import { useRouter } from 'next/navigation';
import { closeIcon } from 'ui/IconsPath';

interface ShareProps {
  isRecruit?: boolean;
}

const Share = ({ isRecruit }: ShareProps) => {
  const router = useRouter();
  const goMain = () => {
    const route = isRecruit ? '/main/recruiting' : '/';
    router.push(route);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className=" relative w-[922px] h-[180px] bg-white rounded-[9px]">
        <Icons
          name={closeIcon}
          className="absolute top-[20.49px] right-[15.23px] cursor-pointer"
        />
        <div className="absolute text-black text-xl font-bold top-[40px] left-[40px]">
          돌아가기
        </div>
        <Button
          buttonText={'홈으로'}
          type={'upload'}
          isDisabled={false}
          onClickHandler={goMain}
          className="absolute left-[40px] bottom-[20px] text-s text-white bg-[#000] opacity-[0.5] hover:bg-gradient-to-r from-[#00E0EE] to-[#517EF3] hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Share;
