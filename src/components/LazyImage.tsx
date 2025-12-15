import { useLazyImage } from '../utils/lazy-image';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const LazyImage = ({
  src,
  alt,
  placeholder,
  className = '',
  width,
  height
}: LazyImageProps) => {
  const { imgRef, imageSrc, isLoaded, handleLoad } = useLazyImage(src, placeholder);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onLoad={handleLoad}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  );
};
