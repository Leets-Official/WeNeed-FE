export const BUTTON_STYLE = {
  small: (className: string) => `px-2 py-2 ${className}`,
  medium: (className: string) => `px-10 py-10 ${className}`,
  large: (className: string) => `px-20 py-20 ${className}`,
  default: () => 'w-full h-full',
} as const;

export const INPUT_STYLE = {
  search: (className: string) =>
    `w-96 h-8 bg-neutral-800 rounded-3xl px-8 outline-none ${className}`,
  default: () => 'w-full h-full ',
} as const;
