import Icons from 'components/common/Icons';
import { FOOTER_LINKS, FOOTER_TEXT } from 'constants/main';
import { weneed } from 'ui/IconsPath';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between h-[666px] bg-black text-white pt-[70px] pb-[130px] px-[10%]">
      <Icons name={weneed} />
      <div className="mt-[80px]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-zinc-300 rounded-full"></div>
          <div className="text-white text-3xl font-semibold">Leets</div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1.5">
            <p>{FOOTER_TEXT.links}</p>
            <p>{FOOTER_TEXT.location}</p>
            <p>{FOOTER_TEXT.copyright}</p>
            <div className="flex gap-[44px] mt-10 text-lg font-semibold">
              {Object.keys(FOOTER_LINKS).map((k) => (
                <p key={k}>{k}</p>
              ))}
            </div>
          </div>
          <div className="flex h-[156px] items-end gap-[20px] ">
            <div className="w-10 h-10 bg-zinc-300 rounded-full"></div>
            <div className="w-10 h-10 bg-zinc-300 rounded-full"></div>
            <div className="w-10 h-10 bg-zinc-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
