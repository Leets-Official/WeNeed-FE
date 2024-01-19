'use client';
import Icons from 'components/common/Icons';
import TeamMate from './TeamMate';
import { searchTeamIcon } from 'ui/IconsPath';
import Image from 'next/image';
import Input from 'components/common/Input';

const MockArr = [
  '민규우',
  '만규야',
  '몽규야짖어봐',
  '멍규멍때리지마',
  '스크롤 늘어나나 테스트',
];
const relatedNickName: string[] | null = [];
const SearchTeamInput = () => {
  return (
    <div>
      <div className="flex w-[842px] h-[64.5px] rounded-[9px] border border-zinc-300 items-center overflow-y-auto">
        <div className="flex items-center gap-x-[15px] flex-wrap w-[680px] ml-[110px]">
          <TeamMate
            imageURL="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
            nickName={'낭낭한민규'}
          />
          <Input
            type={'upload'}
            className=""
            placeholder="함께한 팀원의 이름을 검색해보세요."
            textValue={''}
            onChange={() => console.log('입력중...')}
          />
        </div>
        <Icons name={searchTeamIcon} />
      </div>
      <div className="relative">
        {MockArr.length >= 0 && (
          <div className="absolute top-full left-0 w-[825px] max-h-[300px] bg-zinc-300 rounded-[9px] overflow-y-auto">
            {MockArr.map((keyword, index) => (
              <div
                key={keyword}
                className="flex items-center w-[797px] h-[48px] gap-x-[39px] cursor-pointer hover:bg-gray-100 border-t border-white pl-[37px]"
                onClick={() => console.log(keyword, '멤버 추가기능 실행')}
              >
                <Image
                  src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
                  alt="프로필"
                  width="24"
                  height="24"
                  className="rounded-full"
                />
                <div className="text-base font-semibold">{keyword}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTeamInput;
