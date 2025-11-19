import { cn } from "../../utils/axios/helperfunctions";

const ImageComponent = ({ webpSrc, src, alt, className, ...props }) => {
  return (
    <picture className={cn("object-cover",className)}>
      {webpSrc && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        className={className}
        src={src} // Use webpSrc if available, otherwise use src
        alt={alt}
        {...props}
        loading="lazy"
      />
    </picture>
  );
};

export default ImageComponent;