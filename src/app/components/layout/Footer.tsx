import Icons from 'components/common/Icons';
import { FOOTER_TEXT } from 'constants/main';
import { weneed } from 'ui/IconsPath';
import { Github, Instagram, KakaoTalk, LeetsBlue } from 'ui/Logos';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between h-[666px] text-white pb-[130px] px-[10%] pt-[51px]">
      <Icons name={weneed} />
      <div>
        <div className="flex items-center gap-3 mb-3">
          <LeetsBlue />
          <div className="text-[#4A93FF] text-[30px] font-semibold">Leets</div>
        </div>
        <div className="flex justify-between items-end font-normal">
          <div className="flex flex-col gap-4">
            <p>{FOOTER_TEXT.links}</p>
            <p>{FOOTER_TEXT.location}</p>
            <p>{FOOTER_TEXT.copyright}</p>
            <a href="https://www.leets.land/" target="_blank" rel="noreferrer">
              <div className="flex gap-[44px] mt-10 text-lg font-semibold">
                Leets 소개
              </div>
            </a>
          </div>
          <div className="flex h-[156px] items-end gap-[20px] cursor-pointer ">
            <Instagram />
            <KakaoTalk />
            <a
              href="https://github.com/Leets-Official/WeNeed-FE"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
