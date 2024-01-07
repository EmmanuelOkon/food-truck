import React from "react";
import { Picture } from "./Image";

type CardProps = {
  cardClass?: string;
  imageWrapperClass?: string;
  imageAlt?: string | undefined;
  imageSrc?: string;
  textWrapperClass?: string;
  cover?: string;
  children?: React.ReactNode;
};

const Card = ({
  cardClass,
  imageWrapperClass,
  imageAlt,
  imageSrc,
  textWrapperClass,
  children,
  cover,
  ...rest
}: CardProps) => {
  return (
    <div className={cardClass} {...rest}>
      <Picture
        className={imageWrapperClass || ""}
        objectCover={cover}
        alt={imageAlt || ""}
        image={imageSrc || ""}
      />
      <div className={textWrapperClass}>{children}</div>
    </div>
  );
};

export default Card;
