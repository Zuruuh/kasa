const IMAGE_HEADER_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
} as const;

Object.freeze(IMAGE_HEADER_SIZES);

export { IMAGE_HEADER_SIZES };

export type ImageHeaderSize =
  typeof IMAGE_HEADER_SIZES[keyof typeof IMAGE_HEADER_SIZES];

export interface ImageHeaderProps {
  image: string;
  label?: string;
  size?: ImageHeaderSize;
}
