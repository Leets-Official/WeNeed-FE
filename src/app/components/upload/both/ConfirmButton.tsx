import Button from 'components/common/Button';

interface ConfirmButtonProps {
  btnClick: () => void;
  btnText: string | undefined;
  isWritten: boolean;
}

const ConfirmButton = ({
  btnClick,
  btnText,
  isWritten,
}: ConfirmButtonProps) => {
  return (
    <Button
      buttonText={'확인'}
      type={'small'}
      isDisabled={isWritten}
      onClickHandler={btnClick}
      className={`flex w-[186px] h-[36px] text-neutral-700 text-base rounded-[10px] justify-center items-center ${
        btnText
          ? 'bg-gradient-to-r from-[#00E0EE] to-[#517EF3] text-white'
          : 'bg-zinc-300 text-black'
      } `}
    />
  );
};

export default ConfirmButton;
