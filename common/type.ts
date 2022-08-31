export interface sizeType {
  [type: string]: string
  medium: string
  small: string
}

export interface HeadingType {
  [type: string]: string
  h1: string
  h2: string
}

export interface TypeGroup {
  size: sizeType
  textSize: sizeType
  level: HeadingType
}
