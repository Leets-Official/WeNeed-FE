import Icons from 'components/common/Icons';
import React from 'react';
import { selectFileRIcon } from 'ui/IconsPath';

const BigSentence = () => {
  return (
    <div className="flex items-center justify-center gap-x-[31px] w-full h-[158.17px] bg-white cursor-pointer">
      <Icons name={selectFileRIcon} />
      <p className="text-lg font-bold text-[#CFCFCF]">나누고 싶은 큰 문장</p>
    </div>
  );
};

export default BigSentence;
