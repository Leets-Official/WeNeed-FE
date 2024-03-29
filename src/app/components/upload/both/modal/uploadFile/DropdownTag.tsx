'use client';
import { useEffect, useRef, useState } from 'react';
import Icons from 'components/common/Icons';
import { toggleIcon } from 'ui/IconsPath';
import TagItem from './TagItem';
import { useRecoilState } from 'recoil';
import { uploadDataState } from 'recoil/upload';

interface DropdownTagProps {
  options: readonly string[];
  title: string;
  announcement: string;
  onSelect: (selectedTags: string[]) => void;
}

const DropdownTag = ({
  options,
  title,
  announcement,
  onSelect,
}: DropdownTagProps) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption.includes(option)) {
      setSelectedOption(selectedOption.filter((item) => item !== option));
    } else {
      setSelectedOption([...selectedOption, option]);
    }
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOption(selectedOption.filter((item) => item !== option));
  };

  useEffect(() => {
    setSelectedOption(uploadData.tags);
  }, []);

  useEffect(() => {
    onSelect(selectedOption);
  }, [selectedOption]);

  return (
    <div className="flex flex-col">
      <div
        className="flex w-auto h-[49.96px] pl-[30px] pr-[27px] rounded-[10px] border border-zinc-300 items-center place-content-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <div className="flex gap-x-[2px]">
          <p>{title}</p>
          <p className="text-red-400">*</p>
        </div>
        <div className="flex w-auto items-center overflow-auto-y">
          {selectedOption ? (
            <div
              className="flex gap-x-[10px] text-black mr-[21px]"
              onClick={(event) => event.stopPropagation()}
            >
              {selectedOption.map((option) => (
                <div key={option} className="flex items-center h-[36px]">
                  <TagItem
                    tagName={option}
                    tagClick={() => handleRemoveOption(option)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-zinc-300 mr-[21px] ">{announcement}</div>
          )}
          <Icons name={toggleIcon} />
        </div>
      </div>
      <div className="relative" onClick={() => setIsOpen(!isOpen)}>
        {isOpen && (
          <div
            className="absolute top-full left-0 w-full h-[192px] py-[3px] bg-[#D9D9D9] rounded-[9px] overflow-auto"
            ref={dropdownRef}
          >
            {options.map((option, index) => (
              <div
                key={option}
                className={`flex items-center w-full h-[37px] pl-[30px] py-[10px] cursor-pointer hover:bg-gray-100 border-t border-white ${
                  index === 0 ? 'border-t-0' : ''
                }
                `}
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                <span>{option}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownTag;
