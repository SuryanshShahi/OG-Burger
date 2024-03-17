import Image, { ImageProps } from "next/image";
import { ReactElement } from "react";

interface IImg extends ImageProps {
  isLocal?: boolean;
}

const Img = ({
  alt,
  src,
  width,
  height,
  isLocal,
  ...props
}: IImg): ReactElement => {
  const sourcePrefix = "https://ik.imagekit.io/designkrunch";
  const source = !isLocal && src ? `${sourcePrefix}${src}` : src;
  return (
    <Image src={source} alt={alt} width={width} height={height} {...props} />
  );
};

export default Img;
