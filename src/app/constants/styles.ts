export const INFOBOX_STYLE = {
  infobox: (type: string) =>
    type === 'explanation' ? 'py-4 gap-4 flex-col' : 'flex-row h-[40px]',
  title: (type: string) => (type === 'explanation' ? 'w-full relative' : ''),
  content: (type: string) => (type === 'explanation' ? 'w-full' : 'text-right'),
} as const;

export const BUTTON_STYLE = {
  small: (className: string) => `px-2 py-2 ${className}`,
  medium: (className: string) => `px-10 py-10 ${className}`,
  large: (className: string) => `px-20 py-20 ${className}`,
  userinfo: (className: string) => `py-[17px] ${className}`,
  upload: (className: string) =>
    `w-[843px] h-[44px] rounded-[9px] cursor-pointer ${className}`,
  default: () => 'w-full h-full',
} as const;

export const INPUT_STYLE = {
  search: (className: string) =>
    `w-96 h-8 bg-neutral-800 rounded-3xl px-8 outline-none ${className}`,
  comment: (className: string) =>
    `relative w-[1210px] h-[50px] px-[21px] bg-zinc-300 rounded-lg placeholder-white ${className}`,
  default: () => 'w-full h-full ',
  upload: (className: string) =>
    `w-[40%] h-[30px] text-base text-black outline-none ${className}`,
  upload_recruiter: (className: string) =>
    `w-[40%] h-[30px] text-base text-black outline-none ${className}`,
} as const;

export const PROFILE_STYLE = {
  large: () => 'w-[80px]  h-[80px]',
  medium: () => 'w-[56px] h-[56px]',
  small: () => 'w-[24px] h-[24px]',
} as const;

export const QUESTIONS_BOX_STYLE = {
  mini: () =>
    'flex flex-col justify-start items-start w-full h-[153px] bg-white px-[32px] py-[30px] rounded-lg',
  requirement: () => 'text-red-400 text-sm font-normal',
} as const;
