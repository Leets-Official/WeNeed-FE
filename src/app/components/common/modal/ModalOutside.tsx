'use client';

interface ModalOutsideProps {
  children: React.ReactNode;
  className: string;
  onClose: () => void;
}

const ModalOutside = ({ children, className, onClose }: ModalOutsideProps) => {
  return (
    <div className="z-50 fixed top-0 left-0 flex justify-center items-center w-full h-full">
      <div
        className="absolute left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-[5px]"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      />
      <div className={`absolute ${className}`}>{children}</div>
    </div>
  );
};
export default ModalOutside;
