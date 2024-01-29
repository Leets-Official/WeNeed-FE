'use client';

import { ChangeEvent, useState } from 'react';
import Input from './Input';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div
      className="relative"
      onClick={() => setOpenSearchModal(!openSearchModal)}
    >
      <Input
        type="search"
        onChange={(e) => onChangeKeyword(e)}
        textValue={searchKeyword}
      />
      {openSearchModal && (
        <div className="absolute top-[40px] w-[808px] h-[177px] bg-black border border-white rounded-[10px]"></div>
      )}
    </div>
  );
};

export default SearchBar;
