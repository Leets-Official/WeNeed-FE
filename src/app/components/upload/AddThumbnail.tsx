import Icons from 'components/common/Icons';

const plus = {
  path: 'M10.3846 1.97468C10.3846 1.16764 9.76587 0.515625 9 0.515625C8.23413 0.515625 7.61539 1.16764 7.61539 1.97468V8.54044H1.38462C0.61875 8.54044 0 9.19245 0 9.9995C0 10.8065 0.61875 11.4586 1.38462 11.4586H7.61539V18.0243C7.61539 18.8314 8.23413 19.4834 9 19.4834C9.76587 19.4834 10.3846 18.8314 10.3846 18.0243V11.4586H16.6154C17.3813 11.4586 18 10.8065 18 9.9995C18 9.19245 17.3813 8.54044 16.6154 8.54044H10.3846V1.97468Z',
  width: 18,
  height: 18,
  fill: '#FFFFFF',
};

const AddThumbnail = () => {
  return (
    <div className="relative mb-2.5	 cursor-pointer">
      <div className="flex items-center justify-center w-[1280px] h-[222px] gap-x-[9px] bg-neutral-700 text-white font-bold">
        <Icons name={plus} />
        <p>대표 사진 업로드</p>
      </div>
    </div>
  );
};
export default AddThumbnail;
