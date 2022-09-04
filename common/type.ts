export interface SizeType {
  [type: string]: string;
  medium: string;
  small: string;
}

export interface HeadingType {
  [type: string]: string;
  h1: string;
  h2: string;
}

export interface TypeGroup {
  size: SizeType;
  textSize: SizeType;
  level: HeadingType;
}
