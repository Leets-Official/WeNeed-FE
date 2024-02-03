export const BUTTON_STYLE = {
  small: (className: string) => `px-2 py-2 ${className}`,
  medium: (className: string) => `px-10 py-10 ${className}`,
  large: (className: string) => `px-20 py-20 ${className}`,
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
} as const;

export const PROFILE_STYLE = {
  large: () => 'w-[80px]  h-[80px]',
  medium: () => 'w-[56px] h-[56px]',
  small: () => 'w-[24px] h-[24px]',
} as const;
