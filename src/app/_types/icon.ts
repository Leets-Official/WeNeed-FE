interface IconPathTypes {
  path: string;
  width: number;
  height: number;
  fill: string;
  options?: IconOptions;
}
interface IconOptions {
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'butt' | 'square' | 'inherit' | undefined;
  strokeLinejoin?: 'round' | 'bevel' | 'miter' | 'inherit' | undefined;
  fillRule?: 'evenodd' | 'inherit' | 'nonzero' | undefined;
  clipRule?: 'evenodd' | 'inherit' | 'nonzero' | undefined;
}
interface IconsSVGTypes {
  size: number;
  path: string;
  fill: string;
}
