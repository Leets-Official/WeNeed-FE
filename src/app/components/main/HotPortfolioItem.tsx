import Image from 'next/image';

const HotPortfolioItem = () => {
  return (
    <div className="relative flex justify-center relative w-[1150px] h-[525px] rounded-lg bg-white overflow-hidden ">
      <Image
        src="https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg"
        alt="sample"
        width={1205}
        height={525}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto',
        }}
      />

      <span className="absolute bottom-[30px] left-[30px] text-3xl font-semibold ">
        제목
      </span>
      <div className="absolute top-[15px] left-[15px] w-32 h-7 flex bg-black rounded-2xl text-center">
        <div className="w-full h-full font-semibold">이번 달 HOT</div>
      </div>
      <div className="z-10 absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-neutral-900 rounded-lg"></div>
    </div>
  );
};

export default HotPortfolioItem;
