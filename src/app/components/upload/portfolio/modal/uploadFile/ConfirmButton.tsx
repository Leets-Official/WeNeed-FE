import Button from 'components/common/Button';

interface ConfirmButtonProps {
  btnClick: () => void;
  btnText: string | undefined;
}

const ConfirmButton = ({ btnClick, btnText }: ConfirmButtonProps) => {
  return (
    <Button
      buttonText={'확인'}
      type={'small'}
      isDisabled={false}
      onClickHandler={btnClick}
      className={`flex w-[186px] h-[36px] text-neutral-700 text-base rounded-[10px] justify-center items-center ${
        btnText
          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
          : 'bg-zinc-300 text-black'
      } `}
    />
  );
};

export default ConfirmButton;
