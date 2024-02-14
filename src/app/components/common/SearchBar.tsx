'use client';

import { ChangeEvent, useState } from 'react';
import Input from './Input';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
  const router = useRouter();

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
        onBlur={() => setOpenSearchModal(false)}
        onEnterPress={() => router.push(`/search/${searchKeyword}`)}
      />
      {/* {openSearchModal && (
        <div className="absolute z-20 top-[40px] w-[808px] h-[177px] bg-black border border-white rounded-[10px]"></div>
      )} */}
    </div>
  );
};

export default SearchBar;
