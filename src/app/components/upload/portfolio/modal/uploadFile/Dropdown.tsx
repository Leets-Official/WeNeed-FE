import React, { useState } from 'react';
import Icons from 'components/common/Icons';
import { toggleIcon } from 'ui/IconsPath';

interface DropdownProps {
  options: string[];
  title: string;
  announcement: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  title,
  announcement,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    console.log(option, '이 선택되었습니다.');
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex w-auto h-[49.96px] pl-[30px] pr-[27px] rounded-[10px] border border-zinc-300 items-center place-content-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <div className="flex gap-x-[10px]">
          <p>{title}</p>
          <p className="text-red-400">*</p>
        </div>
        <div className="flex items-center">
          {selectedOption ? (
            <div className="text-black mr-[21px]">{selectedOption}</div>
          ) : (
            <div className="text-zinc-300 mr-[21px] ">{announcement}</div>
          )}
          <Icons name={toggleIcon} />
        </div>
      </div>
      <div className="relative">
        {isOpen && (
          <div className="absolute top-full left-0 w-full h-[192px] py-[3px] bg-[#D9D9D9] rounded-[9px] overflow-y-auto">
            {options.map((option, index) => (
              <div
                key={option}
                className={`flex items-center w-full h-[37px] pl-[30px] py-[10px] cursor-pointer hover:bg-gray-100 border-t border-white ${
                  index === 0 ? 'border-t-0' : ''
                }
                `}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
